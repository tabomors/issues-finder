import * as Types from '../../types/types';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type IssueContentFragment = { __typename?: 'Issue' } & Pick<
  Types.Issue,
  'state' | 'url' | 'id' | 'body' | 'publishedAt' | 'closed'
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
              Types.Maybe<
                { __typename?: 'Label' } & Pick<Types.Label, 'name' | 'color'>
              >
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
          > & {
              node: Types.Maybe<
                (
                  | { __typename?: 'Issue' }
                  | { __typename?: 'PullRequest' }
                  | { __typename?: 'Repository' }
                  | { __typename?: 'User' }
                  | { __typename?: 'Organization' }
                  | { __typename?: 'MarketplaceListing' }
                  | { __typename?: 'App' }) &
                  IssueContentFragment
              >;
            }
        >
      >
    >;
  };
};

export type FindOneIssueQueryVariables = {
  id: Types.Scalars['ID'];
};

export type FindOneIssueQuery = { __typename?: 'Query' } & {
  node: Types.Maybe<
    (
      | { __typename: 'CodeOfConduct' }
      | { __typename: 'License' }
      | { __typename: 'MarketplaceCategory' }
      | { __typename: 'MarketplaceListing' }
      | { __typename: 'App' }
      | { __typename: 'Organization' }
      | { __typename: 'RegistryPackage' }
      | { __typename: 'RegistryPackageVersion' }
      | { __typename: 'RegistryPackageDependency' }
      | { __typename: 'RegistryPackageFile' }
      | { __typename: 'Release' }
      | { __typename: 'User' }
      | { __typename: 'Project' }
      | { __typename: 'ProjectColumn' }
      | { __typename: 'ProjectCard' }
      | { __typename: 'Issue' }
      | { __typename: 'UserContentEdit' }
      | { __typename: 'Label' }
      | { __typename: 'PullRequest' }
      | { __typename: 'Reaction' }
      | { __typename: 'Repository' }
      | { __typename: 'BranchProtectionRule' }
      | { __typename: 'Ref' }
      | { __typename: 'PushAllowance' }
      | { __typename: 'Team' }
      | { __typename: 'UserStatus' }
      | { __typename: 'OrganizationInvitation' }
      | { __typename: 'ReviewDismissalAllowance' }
      | { __typename: 'CommitComment' }
      | { __typename: 'Commit' }
      | { __typename: 'Deployment' }
      | { __typename: 'DeploymentStatus' }
      | { __typename: 'Status' }
      | { __typename: 'StatusContext' }
      | { __typename: 'Tree' }
      | { __typename: 'DeployKey' }
      | { __typename: 'Language' }
      | { __typename: 'Milestone' }
      | { __typename: 'RepositoryTopic' }
      | { __typename: 'Topic' }
      | { __typename: 'IssueComment' }
      | { __typename: 'PullRequestCommit' }
      | { __typename: 'ReviewRequest' }
      | { __typename: 'Mannequin' }
      | { __typename: 'PullRequestReviewThread' }
      | { __typename: 'PullRequestReviewComment' }
      | { __typename: 'PullRequestReview' }
      | { __typename: 'CommitCommentThread' }
      | { __typename: 'ClosedEvent' }
      | { __typename: 'ReopenedEvent' }
      | { __typename: 'SubscribedEvent' }
      | { __typename: 'UnsubscribedEvent' }
      | { __typename: 'MergedEvent' }
      | { __typename: 'ReferencedEvent' }
      | { __typename: 'CrossReferencedEvent' }
      | { __typename: 'AssignedEvent' }
      | { __typename: 'Bot' }
      | { __typename: 'UnassignedEvent' }
      | { __typename: 'LabeledEvent' }
      | { __typename: 'UnlabeledEvent' }
      | { __typename: 'MilestonedEvent' }
      | { __typename: 'DemilestonedEvent' }
      | { __typename: 'RenamedTitleEvent' }
      | { __typename: 'LockedEvent' }
      | { __typename: 'UnlockedEvent' }
      | { __typename: 'DeployedEvent' }
      | { __typename: 'DeploymentEnvironmentChangedEvent' }
      | { __typename: 'HeadRefDeletedEvent' }
      | { __typename: 'HeadRefRestoredEvent' }
      | { __typename: 'HeadRefForcePushedEvent' }
      | { __typename: 'BaseRefForcePushedEvent' }
      | { __typename: 'ReviewRequestedEvent' }
      | { __typename: 'ReviewRequestRemovedEvent' }
      | { __typename: 'ReviewDismissedEvent' }
      | { __typename: 'UserBlockedEvent' }
      | { __typename: 'PullRequestCommitCommentThread' }
      | { __typename: 'BaseRefChangedEvent' }
      | { __typename: 'ReadyForReviewEvent' }
      | { __typename: 'AddedToProjectEvent' }
      | { __typename: 'CommentDeletedEvent' }
      | { __typename: 'ConvertedNoteToIssueEvent' }
      | { __typename: 'MentionedEvent' }
      | { __typename: 'MovedColumnsInProjectEvent' }
      | { __typename: 'PinnedEvent' }
      | { __typename: 'RemovedFromProjectEvent' }
      | { __typename: 'TransferredEvent' }
      | { __typename: 'UnpinnedEvent' }
      | { __typename: 'Gist' }
      | { __typename: 'GistComment' }
      | { __typename: 'Sponsorship' }
      | { __typename: 'PublicKey' }
      | { __typename: 'SavedReply' }
      | { __typename: 'ReleaseAsset' }
      | { __typename: 'RegistryPackageTag' }
      | { __typename: 'OrganizationIdentityProvider' }
      | { __typename: 'ExternalIdentity' }
      | { __typename: 'SecurityAdvisory' }
      | { __typename: 'SponsorsListing' }
      | { __typename: 'Blob' }
      | { __typename: 'RepositoryInvitation' }
      | { __typename: 'Tag' }) &
      IssueContentFragment
  >;
};
export const IssueContentFragmentDoc = gql`
  fragment IssueContent on Issue {
    state
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
        color
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
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    FindIssuesQuery,
    FindIssuesQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<FindIssuesQuery, FindIssuesQueryVariables>(
    FindIssuesDocument,
    baseOptions
  );
}
export function useFindIssuesLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    FindIssuesQuery,
    FindIssuesQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    FindIssuesQuery,
    FindIssuesQueryVariables
  >(FindIssuesDocument, baseOptions);
}

export type FindIssuesQueryHookResult = ReturnType<typeof useFindIssuesQuery>;
export type FindIssuesQueryResult = ApolloReactCommon.QueryResult<
  FindIssuesQuery,
  FindIssuesQueryVariables
>;
export const FindOneIssueDocument = gql`
  query findOneIssue($id: ID!) {
    node(id: $id) {
      __typename
      ...IssueContent
    }
  }
  ${IssueContentFragmentDoc}
`;

export function useFindOneIssueQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    FindOneIssueQuery,
    FindOneIssueQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    FindOneIssueQuery,
    FindOneIssueQueryVariables
  >(FindOneIssueDocument, baseOptions);
}
export function useFindOneIssueLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    FindOneIssueQuery,
    FindOneIssueQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    FindOneIssueQuery,
    FindOneIssueQueryVariables
  >(FindOneIssueDocument, baseOptions);
}

export type FindOneIssueQueryHookResult = ReturnType<
  typeof useFindOneIssueQuery
>;
export type FindOneIssueQueryResult = ApolloReactCommon.QueryResult<
  FindOneIssueQuery,
  FindOneIssueQueryVariables
>;
