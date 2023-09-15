import * as Types from '../../types/graphqlTypes';

import { IssueContentFragmentDoc } from './IssueContent.generated';
import { useQuery, useInfiniteQuery, UseQueryOptions, UseInfiniteQueryOptions } from '@tanstack/react-query';
const endpointUrl = '/api/graphql';

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch(endpointUrl as string, {
    method: "POST",
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
export type FindIssuesQueryVariables = Types.Exact<{
  query: Types.Scalars['String']['input'];
  after?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type FindIssuesQuery = { __typename?: 'Query', search: { __typename?: 'SearchResultItemConnection', pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null }, edges?: Array<{ __typename?: 'SearchResultItemEdge', cursor: string, node?: { __typename: 'App' } | { __typename: 'Discussion' } | { __typename: 'Issue', state: Types.IssueState, url: any, id: string, closed: boolean, body: string, createdAt: any, title: string, repository: { __typename?: 'Repository', name: string, url: any }, labels?: { __typename?: 'LabelConnection', totalCount: number, nodes?: Array<{ __typename?: 'Label', name: string, color: string } | null> | null } | null, comments: { __typename?: 'IssueCommentConnection', totalCount: number } } | { __typename: 'MarketplaceListing' } | { __typename: 'Organization' } | { __typename: 'PullRequest' } | { __typename: 'Repository' } | { __typename: 'User' } | null } | null> | null } };


export const FindIssuesDocument = `
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
    ${IssueContentFragmentDoc}`;
export const useFindIssuesQuery = <
      TData = FindIssuesQuery,
      TError = unknown
    >(
      variables: FindIssuesQueryVariables,
      options?: UseQueryOptions<FindIssuesQuery, TError, TData>
    ) =>
    useQuery<FindIssuesQuery, TError, TData>(
      ['findIssues', variables],
      fetcher<FindIssuesQuery, FindIssuesQueryVariables>(FindIssuesDocument, variables),
      options
    );
export const useInfiniteFindIssuesQuery = <
      TData = FindIssuesQuery,
      TError = unknown
    >(
      pageParamKey: keyof FindIssuesQueryVariables,
      variables: FindIssuesQueryVariables,
      options?: UseInfiniteQueryOptions<FindIssuesQuery, TError, TData>
    ) =>
    useInfiniteQuery<FindIssuesQuery, TError, TData>(
      ['findIssues.infinite', variables],
      (metaData) => fetcher<FindIssuesQuery, FindIssuesQueryVariables>(FindIssuesDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    );
