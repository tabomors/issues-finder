import * as Types from '../../types/types';

import gql from 'graphql-tag';
import * as ReactApolloHooks from 'react-apollo-hooks';
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
  baseOptions?: ReactApolloHooks.QueryHookOptions<GetLanguageQueryVariables>
) {
  return ReactApolloHooks.useQuery<GetLanguageQuery, GetLanguageQueryVariables>(
    GetLanguageDocument,
    baseOptions
  );
}
