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
export type GetLanguageQueryResult = ApolloReactCommon.QueryResult<
  GetLanguageQuery,
  GetLanguageQueryVariables
>;
