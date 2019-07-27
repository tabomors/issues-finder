import { ApolloClient } from 'apollo-client';
import { NormalizedCacheObject } from 'apollo-cache-inmemory';
import Head from "next/head";
import React from "react";
import initApollo from "./initApollo";
import { isBrowser } from "./isBrowser";
import { renderToString } from "react-dom/server";
import { getMarkupFromTree } from "react-apollo-hooks";

export default (App: any) => {
  return class WithData extends React.Component {
    static displayName = `WithData(${App.displayName})`;

    static async getInitialProps(ctx: any) {
      const {
        Component,
        router,
        ctx: { req, res }
      } = ctx;
      const apollo = initApollo({});

      // Write default data to apollo cache
      apollo.cache.writeData({ data: { language: '', labels: [] } })

      ctx.ctx.apolloClient = apollo;

      let appProps = {};
      if (App.getInitialProps) {
        appProps = await App.getInitialProps(ctx);
      }

      if (res && res.finished) {
        // When redirecting, the response is finished.
        // No point in continuing to render
        return {};
      }

      if (!isBrowser) {
        // Run all graphql queries in the component tree
        // and extract the resulting data
        try {
          // Run all GraphQL queries
          await getMarkupFromTree({
            renderFunction: renderToString,
            tree: (
              <App
                {...appProps}
                Component={Component}
                router={router}
                apolloClient={apollo}
              />
            )
          });
        } catch (error) {
          // Prevent Apollo Client GraphQL errors from crashing SSR.
          // Handle them in components via the data.error prop:
          // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
          console.error("Error while running `getDataFromTree`", error);
        }

        // head side effect therefore need to be cleared manually
        Head.rewind();
        // getDataFromTree does not call componentWillUnmount
      }

      // Extract query data from the Apollo's store
      const apolloState = apollo.cache.extract();

      return {
        ...appProps,
        apolloState
      };
    }

    apolloClient: ApolloClient<NormalizedCacheObject>;

    constructor(props: any) {
      super(props);

      console.log('props.apolloState', props.apolloState)

      // `getDataFromTree` renders the component first, the client is passed off as a property.
      // After that rendering is done using Next's normal rendering pipeline
      this.apolloClient = initApollo(props.apolloState);
    }

    render() {
      return <App {...this.props} apolloClient={this.apolloClient} />;
    }
  };
};
