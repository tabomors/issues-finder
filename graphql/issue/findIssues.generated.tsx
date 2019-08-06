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

export type FindOneIssueQueryVariables = {
  id: Types.Scalars['ID'];
};

export type FindOneIssueQuery = { __typename?: 'Query' } & {
  node: Types.Maybe<
    {
      __typename?:
        | 'CodeOfConduct'
        | 'License'
        | 'MarketplaceCategory'
        | 'MarketplaceListing'
        | 'App'
        | 'Organization'
        | 'RegistryPackage'
        | 'RegistryPackageVersion'
        | 'RegistryPackageDependency'
        | 'RegistryPackageFile'
        | 'Release'
        | 'User'
        | 'Project'
        | 'ProjectColumn'
        | 'ProjectCard'
        | 'Issue'
        | 'UserContentEdit'
        | 'Label'
        | 'PullRequest'
        | 'Reaction'
        | 'Repository'
        | 'BranchProtectionRule'
        | 'Ref'
        | 'PushAllowance'
        | 'Team'
        | 'UserStatus'
        | 'OrganizationInvitation'
        | 'ReviewDismissalAllowance'
        | 'CommitComment'
        | 'Commit'
        | 'Deployment'
        | 'DeploymentStatus'
        | 'Status'
        | 'StatusContext'
        | 'Tree'
        | 'DeployKey'
        | 'Language'
        | 'Milestone'
        | 'RepositoryTopic'
        | 'Topic'
        | 'IssueComment'
        | 'PullRequestCommit'
        | 'ReviewRequest'
        | 'Mannequin'
        | 'PullRequestReviewThread'
        | 'PullRequestReviewComment'
        | 'PullRequestReview'
        | 'CommitCommentThread'
        | 'ClosedEvent'
        | 'ReopenedEvent'
        | 'SubscribedEvent'
        | 'UnsubscribedEvent'
        | 'MergedEvent'
        | 'ReferencedEvent'
        | 'CrossReferencedEvent'
        | 'AssignedEvent'
        | 'Bot'
        | 'UnassignedEvent'
        | 'LabeledEvent'
        | 'UnlabeledEvent'
        | 'MilestonedEvent'
        | 'DemilestonedEvent'
        | 'RenamedTitleEvent'
        | 'LockedEvent'
        | 'UnlockedEvent'
        | 'DeployedEvent'
        | 'DeploymentEnvironmentChangedEvent'
        | 'HeadRefDeletedEvent'
        | 'HeadRefRestoredEvent'
        | 'HeadRefForcePushedEvent'
        | 'BaseRefForcePushedEvent'
        | 'ReviewRequestedEvent'
        | 'ReviewRequestRemovedEvent'
        | 'ReviewDismissedEvent'
        | 'UserBlockedEvent'
        | 'PullRequestCommitCommentThread'
        | 'BaseRefChangedEvent'
        | 'ReadyForReviewEvent'
        | 'AddedToProjectEvent'
        | 'CommentDeletedEvent'
        | 'ConvertedNoteToIssueEvent'
        | 'MentionedEvent'
        | 'MovedColumnsInProjectEvent'
        | 'PinnedEvent'
        | 'RemovedFromProjectEvent'
        | 'TransferredEvent'
        | 'UnpinnedEvent'
        | 'Gist'
        | 'GistComment'
        | 'Sponsorship'
        | 'PublicKey'
        | 'SavedReply'
        | 'ReleaseAsset'
        | 'RegistryPackageTag'
        | 'OrganizationIdentityProvider'
        | 'ExternalIdentity'
        | 'SecurityAdvisory'
        | 'SponsorsListing'
        | 'Blob'
        | 'RepositoryInvitation'
        | 'Tag';
    } & IssueContentFragment
  >;
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
export const FindOneIssueDocument = gql`
  query findOneIssue($id: ID!) {
    node(id: $id) {
      ...IssueContent
    }
  }
  ${IssueContentFragmentDoc}
`;

export function useFindOneIssueQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<FindOneIssueQueryVariables>
) {
  return ReactApolloHooks.useQuery<
    FindOneIssueQuery,
    FindOneIssueQueryVariables
  >(FindOneIssueDocument, baseOptions);
}
