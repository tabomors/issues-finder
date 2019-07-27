import * as Types from '../../types/types';

import gql from 'graphql-tag';
import * as ReactApolloHooks from 'react-apollo-hooks';
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

export function useGetLabelsQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<GetLabelsQueryVariables>
) {
  return ReactApolloHooks.useQuery<GetLabelsQuery, GetLabelsQueryVariables>(
    GetLabelsDocument,
    baseOptions
  );
}
