import { ApolloClient } from 'apollo-client';
import {
  NormalizedCacheObject,
  InMemoryCache,
  IntrospectionFragmentMatcher
} from 'apollo-cache-inmemory';
import Head from 'next/head';
import React, { useMemo } from 'react';
import { ApolloLink } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';
import fetch from 'isomorphic-unfetch';
import { NextPage, NextPageContext } from 'next';

import introspectionQueryResultData from '../graphql/introspectionResult.generated';

type ApolloClientT = ApolloClient<NormalizedCacheObject>;

interface WithApolloProps {
  apolloClient: ApolloClientT;
  apolloState: object;
}

/**
 * Creates and provides the apolloContext
 * to a next.js PageTree. Use it by wrapping
 * your PageComponent via HOC pattern.
 */
export function withApollo(PageComponent: NextPage, { ssr = true } = {}) {
  const WithApollo = ({
    apolloClient,
    apolloState,
    ...pageProps
  }: WithApolloProps) => {
    const client = useMemo(() => {
      // We pass in the apolloClient directly when using getDataFromTree
      if (apolloClient) {
        return apolloClient;
      }

      // Otherwise initClient using apolloState
      return initApolloClient(apolloState);
    }, []);
    return (
      <ApolloProvider client={client}>
        <PageComponent {...pageProps} />
      </ApolloProvider>
    );
  };

  if (process.env.NODE_ENV !== 'production') {
    // Find correct display name
    const displayName =
      PageComponent.displayName || PageComponent.name || 'Component';

    // Warn if old way of installing apollo is used
    if (displayName === 'App') {
      console.warn('This withApollo HOC only works with PageComponents.');
    }

    // Set correct display name for devtools
    WithApollo.displayName = `withApollo(${displayName})`;
  }

  if (ssr || PageComponent.getInitialProps) {
    WithApollo.getInitialProps = async (
      ctx: NextPageContext & {
        apolloClient: ApolloClientT;
      }
    ) => {
      const { AppTree } = ctx;

      // Run all GraphQL queries in the component tree
      // and extract the resulting data
      const apolloClient = (ctx.apolloClient = initApolloClient({}));

      // Write default data to apollo cache
      apolloClient.cache.writeData({ data: { language: '', labels: [] } });

      const pageProps = PageComponent.getInitialProps
        ? await PageComponent.getInitialProps(ctx)
        : {};

      // Only on the server
      if (typeof window === 'undefined') {
        // When redirecting, the response is finished.
        // No point in continuing to render
        if (ctx.res && ctx.res.finished) {
          return {};
        }

        if (ssr) {
          try {
            // Run all GraphQL queries
            const { getDataFromTree } = await import('@apollo/react-ssr');
            await getDataFromTree(
              // @ts-ignore
              <AppTree
                pageProps={{
                  ...pageProps,
                  apolloClient
                }}
              />
            );
          } catch (error) {
            // Prevent Apollo Client GraphQL errors from crashing SSR.
            // Handle them in components via the data.error prop:
            // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
            console.error('Error while running `getDataFromTree`', error);
          }
        }

        // getDataFromTree does not call componentWillUnmount
        // head side effect therefore need to be cleared manually
        Head.rewind();
      }

      // Extract query data from the Apollo store
      const apolloState = apolloClient.cache.extract();

      return {
        ...pageProps,
        apolloState
      };
    };
  }

  return WithApollo;
}

let apolloClient: ApolloClientT;

/**
 * Always creates a new apollo client on the server
 * Creates or reuses apollo client in the browser.
 */
function initApolloClient(...args: any) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (typeof window === 'undefined') {
    return createApolloClient(...args);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = createApolloClient(...args);
  }

  return apolloClient;
}

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData
});

/**
 * Creates and configures the ApolloClient
 */
function createApolloClient(initialState = {}) {
  const gqlEndpoint = `${process.env.SERVER_URL}/graphql`;

  const httpLink = new HttpLink({
    uri: gqlEndpoint, // Server URL (must be absolute)
    fetch
  });

  return new ApolloClient({
    connectToDevTools: typeof window !== 'undefined',
    ssrMode: typeof window === 'undefined', // Disables forceFetch on the server (so queries are only run once)
    link: ApolloLink.from([
      onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors)
          graphQLErrors.forEach(({ message, locations, path }) =>
            console.error(
              `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            )
          );
        if (networkError) {
          console.error(`[Network error]: ${networkError}`);
        }
      }),
      httpLink
    ]),
    cache: new InMemoryCache({ fragmentMatcher }).restore(initialState || {}),
    resolvers: {}
  });
}
