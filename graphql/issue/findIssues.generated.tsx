import * as Types from '../../types/types';

import gql from 'graphql-tag';
import * as ReactApolloHooks from 'react-apollo-hooks';
export type IssueContentFragment = { __typename?: 'Issue' } & Pick<
  Types.Issue,
  'url' | 'id' | 'body' | 'publishedAt' | 'closed'
> & {
    repository: { __typename?: 'Repository' } & Pick<
      Types.Repository,
      'name' | 'url'
    >;
    labels: Types.Maybe<
      { __typename?: 'LabelConnection' } & Pick<
        Types.LabelConnection,
        'totalCount'
      > & {
          nodes: Types.Maybe<
            Array<
              Types.Maybe<{ __typename?: 'Label' } & Pick<Types.Label, 'name'>>
            >
          >;
        }
    >;
  };

export type FindIssuesQueryVariables = {
  query: Types.Scalars['String'];
  after?: Types.Maybe<Types.Scalars['String']>;
};

export type FindIssuesQuery = { __typename?: 'Query' } & {
  search: { __typename?: 'SearchResultItemConnection' } & {
    pageInfo: { __typename?: 'PageInfo' } & Pick<
      Types.PageInfo,
      'hasPreviousPage' | 'hasNextPage' | 'startCursor' | 'endCursor'
    >;
    edges: Types.Maybe<
      Array<
        Types.Maybe<
          { __typename?: 'SearchResultItemEdge' } & Pick<
            Types.SearchResultItemEdge,
            'cursor'
          > & { node: Types.Maybe<IssueContentFragment> }
        >
      >
    >;
  };
};
export const IssueContentFragmentDoc = gql`
  fragment IssueContent on Issue {
    url
    id
    body
    repository {
      name
      url
    }
    publishedAt
    closed
    labels(first: 10) {
      totalCount
      nodes {
        name
      }
    }
  }
`;
export const FindIssuesDocument = gql`
  query findIssues($query: String!, $after: String) {
    search(type: ISSUE, query: $query, first: 50, after: $after) {
      pageInfo {
        hasPreviousPage
        hasNextPage
        startCursor
        endCursor
      }
      edges {
        cursor
        node {
          __typename
          ...IssueContent
        }
      }
    }
  }
  ${IssueContentFragmentDoc}
`;

export function useFindIssuesQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<FindIssuesQueryVariables>
) {
  return ReactApolloHooks.useQuery<FindIssuesQuery, FindIssuesQueryVariables>(
    FindIssuesDocument,
    baseOptions
  );
}
