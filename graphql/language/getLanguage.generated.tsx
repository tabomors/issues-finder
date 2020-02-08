import * as Types from '../../types/types';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type GetLanguageQueryVariables = {};

export type GetLanguageQuery = { __typename?: 'Query' } & Pick<
  Types.Query,
  'language'
>;

export const GetLanguageDocument = gql`
  query GetLanguage {
    language @client
  }
`;

/**
 * __useGetLanguageQuery__
 *
 * To run a query within a React component, call `useGetLanguageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLanguageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLanguageQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetLanguageQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetLanguageQuery,
    GetLanguageQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<GetLanguageQuery, GetLanguageQueryVariables>(
    GetLanguageDocument,
    baseOptions
  );
}
export function useGetLanguageLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetLanguageQuery,
    GetLanguageQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    GetLanguageQuery,
    GetLanguageQueryVariables
  >(GetLanguageDocument, baseOptions);
}
export type GetLanguageQueryHookResult = ReturnType<typeof useGetLanguageQuery>;
export type GetLanguageLazyQueryHookResult = ReturnType<
  typeof useGetLanguageLazyQuery
>;
export type GetLanguageQueryResult = ApolloReactCommon.QueryResult<
  GetLanguageQuery,
  GetLanguageQueryVariables
>;
