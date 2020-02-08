import * as Types from '../../types/types';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type GetLabelsQueryVariables = {};

export type GetLabelsQuery = { __typename?: 'Query' } & Pick<
  Types.Query,
  'labels'
>;

export const GetLabelsDocument = gql`
  query GetLabels {
    labels @client
  }
`;

/**
 * __useGetLabelsQuery__
 *
 * To run a query within a React component, call `useGetLabelsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLabelsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLabelsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetLabelsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetLabelsQuery,
    GetLabelsQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<GetLabelsQuery, GetLabelsQueryVariables>(
    GetLabelsDocument,
    baseOptions
  );
}
export function useGetLabelsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetLabelsQuery,
    GetLabelsQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<GetLabelsQuery, GetLabelsQueryVariables>(
    GetLabelsDocument,
    baseOptions
  );
}
export type GetLabelsQueryHookResult = ReturnType<typeof useGetLabelsQuery>;
export type GetLabelsLazyQueryHookResult = ReturnType<
  typeof useGetLabelsLazyQuery
>;
export type GetLabelsQueryResult = ApolloReactCommon.QueryResult<
  GetLabelsQuery,
  GetLabelsQueryVariables
>;
