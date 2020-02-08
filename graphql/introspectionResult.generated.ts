export interface IntrospectionResultData {
  __schema: {
    types: {
      kind: string;
      name: string;
      possibleTypes: {
        name: string;
      }[];
    }[];
  };
}
const result: IntrospectionResultData = {
  __schema: {
    types: [
      {
        kind: 'INTERFACE',
        name: 'Node',
        possibleTypes: [
          {
            name: 'CodeOfConduct'
          },
          {
            name: 'License'
          },
          {
            name: 'MarketplaceCategory'
          },
          {
            name: 'MarketplaceListing'
          },
          {
            name: 'App'
          },
          {
            name: 'Organization'
          },
          {
            name: 'RegistryPackage'
          },
          {
            name: 'RegistryPackageVersion'
          },
          {
            name: 'RegistryPackageDependency'
          },
          {
            name: 'RegistryPackageFile'
          },
          {
            name: 'Release'
          },
          {
            name: 'User'
          },
          {
            name: 'Project'
          },
          {
            name: 'ProjectColumn'
          },
          {
            name: 'ProjectCard'
          },
          {
            name: 'Issue'
          },
          {
            name: 'UserContentEdit'
          },
          {
            name: 'Label'
          },
          {
            name: 'PullRequest'
          },
          {
            name: 'Reaction'
          },
          {
            name: 'Repository'
          },
          {
            name: 'BranchProtectionRule'
          },
          {
            name: 'Ref'
          },
          {
            name: 'PushAllowance'
          },
          {
            name: 'Team'
          },
          {
            name: 'UserStatus'
          },
          {
            name: 'OrganizationInvitation'
          },
          {
            name: 'ReviewDismissalAllowance'
          },
          {
            name: 'CommitComment'
          },
          {
            name: 'Commit'
          },
          {
            name: 'Deployment'
          },
          {
            name: 'DeploymentStatus'
          },
          {
            name: 'Status'
          },
          {
            name: 'StatusContext'
          },
          {
            name: 'Tree'
          },
          {
            name: 'DeployKey'
          },
          {
            name: 'Language'
          },
          {
            name: 'Milestone'
          },
          {
            name: 'RepositoryTopic'
          },
          {
            name: 'Topic'
          },
          {
            name: 'IssueComment'
          },
          {
            name: 'PullRequestCommit'
          },
          {
            name: 'ReviewRequest'
          },
          {
            name: 'Mannequin'
          },
          {
            name: 'PullRequestReviewThread'
          },
          {
            name: 'PullRequestReviewComment'
          },
          {
            name: 'PullRequestReview'
          },
          {
            name: 'CommitCommentThread'
          },
          {
            name: 'ClosedEvent'
          },
          {
            name: 'ReopenedEvent'
          },
          {
            name: 'SubscribedEvent'
          },
          {
            name: 'UnsubscribedEvent'
          },
          {
            name: 'MergedEvent'
          },
          {
            name: 'ReferencedEvent'
          },
          {
            name: 'CrossReferencedEvent'
          },
          {
            name: 'AssignedEvent'
          },
          {
            name: 'Bot'
          },
          {
            name: 'UnassignedEvent'
          },
          {
            name: 'LabeledEvent'
          },
          {
            name: 'UnlabeledEvent'
          },
          {
            name: 'MilestonedEvent'
          },
          {
            name: 'DemilestonedEvent'
          },
          {
            name: 'RenamedTitleEvent'
          },
          {
            name: 'LockedEvent'
          },
          {
            name: 'UnlockedEvent'
          },
          {
            name: 'DeployedEvent'
          },
          {
            name: 'DeploymentEnvironmentChangedEvent'
          },
          {
            name: 'HeadRefDeletedEvent'
          },
          {
            name: 'HeadRefRestoredEvent'
          },
          {
            name: 'HeadRefForcePushedEvent'
          },
          {
            name: 'BaseRefForcePushedEvent'
          },
          {
            name: 'ReviewRequestedEvent'
          },
          {
            name: 'ReviewRequestRemovedEvent'
          },
          {
            name: 'ReviewDismissedEvent'
          },
          {
            name: 'UserBlockedEvent'
          },
          {
            name: 'PullRequestCommitCommentThread'
          },
          {
            name: 'BaseRefChangedEvent'
          },
          {
            name: 'ReadyForReviewEvent'
          },
          {
            name: 'AddedToProjectEvent'
          },
          {
            name: 'CommentDeletedEvent'
          },
          {
            name: 'ConvertedNoteToIssueEvent'
          },
          {
            name: 'MentionedEvent'
          },
          {
            name: 'MovedColumnsInProjectEvent'
          },
          {
            name: 'PinnedEvent'
          },
          {
            name: 'RemovedFromProjectEvent'
          },
          {
            name: 'TransferredEvent'
          },
          {
            name: 'UnpinnedEvent'
          },
          {
            name: 'Gist'
          },
          {
            name: 'GistComment'
          },
          {
            name: 'Sponsorship'
          },
          {
            name: 'PublicKey'
          },
          {
            name: 'SavedReply'
          },
          {
            name: 'ReleaseAsset'
          },
          {
            name: 'RegistryPackageTag'
          },
          {
            name: 'OrganizationIdentityProvider'
          },
          {
            name: 'ExternalIdentity'
          },
          {
            name: 'SecurityAdvisory'
          },
          {
            name: 'SponsorsListing'
          },
          {
            name: 'Blob'
          },
          {
            name: 'RepositoryInvitation'
          },
          {
            name: 'Tag'
          }
        ]
      },
      {
        kind: 'INTERFACE',
        name: 'Actor',
        possibleTypes: [
          {
            name: 'Organization'
          },
          {
            name: 'User'
          },
          {
            name: 'Mannequin'
          },
          {
            name: 'Bot'
          }
        ]
      },
      {
        kind: 'INTERFACE',
        name: 'RegistryPackageOwner',
        possibleTypes: [
          {
            name: 'Organization'
          },
          {
            name: 'User'
          },
          {
            name: 'Repository'
          }
        ]
      },
      {
        kind: 'INTERFACE',
        name: 'UniformResourceLocatable',
        possibleTypes: [
          {
            name: 'Organization'
          },
          {
            name: 'Release'
          },
          {
            name: 'User'
          },
          {
            name: 'Issue'
          },
          {
            name: 'PullRequest'
          },
          {
            name: 'Repository'
          },
          {
            name: 'Commit'
          },
          {
            name: 'Milestone'
          },
          {
            name: 'RepositoryTopic'
          },
          {
            name: 'PullRequestCommit'
          },
          {
            name: 'Mannequin'
          },
          {
            name: 'ClosedEvent'
          },
          {
            name: 'MergedEvent'
          },
          {
            name: 'CrossReferencedEvent'
          },
          {
            name: 'Bot'
          },
          {
            name: 'ReviewDismissedEvent'
          },
          {
            name: 'ReadyForReviewEvent'
          },
          {
            name: 'Gist'
          }
        ]
      },
      {
        kind: 'INTERFACE',
        name: 'RegistryPackageSearch',
        possibleTypes: [
          {
            name: 'Organization'
          },
          {
            name: 'User'
          }
        ]
      },
      {
        kind: 'INTERFACE',
        name: 'ProjectOwner',
        possibleTypes: [
          {
            name: 'Organization'
          },
          {
            name: 'User'
          },
          {
            name: 'Repository'
          }
        ]
      },
      {
        kind: 'INTERFACE',
        name: 'Closable',
        possibleTypes: [
          {
            name: 'Project'
          },
          {
            name: 'Issue'
          },
          {
            name: 'PullRequest'
          },
          {
            name: 'Milestone'
          }
        ]
      },
      {
        kind: 'INTERFACE',
        name: 'Updatable',
        possibleTypes: [
          {
            name: 'Project'
          },
          {
            name: 'Issue'
          },
          {
            name: 'PullRequest'
          },
          {
            name: 'CommitComment'
          },
          {
            name: 'IssueComment'
          },
          {
            name: 'PullRequestReviewComment'
          },
          {
            name: 'PullRequestReview'
          },
          {
            name: 'GistComment'
          }
        ]
      },
      {
        kind: 'UNION',
        name: 'ProjectCardItem',
        possibleTypes: [
          {
            name: 'Issue'
          },
          {
            name: 'PullRequest'
          }
        ]
      },
      {
        kind: 'INTERFACE',
        name: 'Assignable',
        possibleTypes: [
          {
            name: 'Issue'
          },
          {
            name: 'PullRequest'
          }
        ]
      },
      {
        kind: 'INTERFACE',
        name: 'Comment',
        possibleTypes: [
          {
            name: 'Issue'
          },
          {
            name: 'PullRequest'
          },
          {
            name: 'CommitComment'
          },
          {
            name: 'IssueComment'
          },
          {
            name: 'PullRequestReviewComment'
          },
          {
            name: 'PullRequestReview'
          },
          {
            name: 'GistComment'
          }
        ]
      },
      {
        kind: 'INTERFACE',
        name: 'UpdatableComment',
        possibleTypes: [
          {
            name: 'Issue'
          },
          {
            name: 'PullRequest'
          },
          {
            name: 'CommitComment'
          },
          {
            name: 'IssueComment'
          },
          {
            name: 'PullRequestReviewComment'
          },
          {
            name: 'PullRequestReview'
          },
          {
            name: 'GistComment'
          }
        ]
      },
      {
        kind: 'INTERFACE',
        name: 'Labelable',
        possibleTypes: [
          {
            name: 'Issue'
          },
          {
            name: 'PullRequest'
          }
        ]
      },
      {
        kind: 'INTERFACE',
        name: 'Lockable',
        possibleTypes: [
          {
            name: 'Issue'
          },
          {
            name: 'PullRequest'
          }
        ]
      },
      {
        kind: 'INTERFACE',
        name: 'Reactable',
        possibleTypes: [
          {
            name: 'Issue'
          },
          {
            name: 'PullRequest'
          },
          {
            name: 'CommitComment'
          },
          {
            name: 'IssueComment'
          },
          {
            name: 'PullRequestReviewComment'
          },
          {
            name: 'PullRequestReview'
          }
        ]
      },
      {
        kind: 'INTERFACE',
        name: 'RepositoryNode',
        possibleTypes: [
          {
            name: 'Issue'
          },
          {
            name: 'PullRequest'
          },
          {
            name: 'CommitComment'
          },
          {
            name: 'IssueComment'
          },
          {
            name: 'PullRequestReviewComment'
          },
          {
            name: 'PullRequestReview'
          },
          {
            name: 'CommitCommentThread'
          },
          {
            name: 'PullRequestCommitCommentThread'
          }
        ]
      },
      {
        kind: 'INTERFACE',
        name: 'Subscribable',
        possibleTypes: [
          {
            name: 'Issue'
          },
          {
            name: 'PullRequest'
          },
          {
            name: 'Repository'
          },
          {
            name: 'Team'
          },
          {
            name: 'Commit'
          }
        ]
      },
      {
        kind: 'INTERFACE',
        name: 'Starrable',
        possibleTypes: [
          {
            name: 'Repository'
          },
          {
            name: 'Topic'
          },
          {
            name: 'Gist'
          }
        ]
      },
      {
        kind: 'INTERFACE',
        name: 'RepositoryInfo',
        possibleTypes: [
          {
            name: 'Repository'
          }
        ]
      },
      {
        kind: 'INTERFACE',
        name: 'RepositoryOwner',
        possibleTypes: [
          {
            name: 'Organization'
          },
          {
            name: 'User'
          }
        ]
      },
      {
        kind: 'INTERFACE',
        name: 'GitObject',
        possibleTypes: [
          {
            name: 'Commit'
          },
          {
            name: 'Tree'
          },
          {
            name: 'Blob'
          },
          {
            name: 'Tag'
          }
        ]
      },
      {
        kind: 'UNION',
        name: 'PushAllowanceActor',
        possibleTypes: [
          {
            name: 'User'
          },
          {
            name: 'Team'
          }
        ]
      },
      {
        kind: 'INTERFACE',
        name: 'MemberStatusable',
        possibleTypes: [
          {
            name: 'Organization'
          },
          {
            name: 'Team'
          }
        ]
      },
      {
        kind: 'UNION',
        name: 'ReviewDismissalAllowanceActor',
        possibleTypes: [
          {
            name: 'User'
          },
          {
            name: 'Team'
          }
        ]
      },
      {
        kind: 'UNION',
        name: 'PermissionGranter',
        possibleTypes: [
          {
            name: 'Organization'
          },
          {
            name: 'Repository'
          },
          {
            name: 'Team'
          }
        ]
      },
      {
        kind: 'INTERFACE',
        name: 'Deletable',
        possibleTypes: [
          {
            name: 'CommitComment'
          },
          {
            name: 'IssueComment'
          },
          {
            name: 'PullRequestReviewComment'
          },
          {
            name: 'PullRequestReview'
          },
          {
            name: 'GistComment'
          }
        ]
      },
      {
        kind: 'INTERFACE',
        name: 'GitSignature',
        possibleTypes: [
          {
            name: 'GpgSignature'
          },
          {
            name: 'SmimeSignature'
          },
          {
            name: 'UnknownSignature'
          }
        ]
      },
      {
        kind: 'UNION',
        name: 'IssueOrPullRequest',
        possibleTypes: [
          {
            name: 'Issue'
          },
          {
            name: 'PullRequest'
          }
        ]
      },
      {
        kind: 'UNION',
        name: 'RequestedReviewer',
        possibleTypes: [
          {
            name: 'User'
          },
          {
            name: 'Team'
          },
          {
            name: 'Mannequin'
          }
        ]
      },
      {
        kind: 'UNION',
        name: 'PullRequestTimelineItem',
        possibleTypes: [
          {
            name: 'Commit'
          },
          {
            name: 'CommitCommentThread'
          },
          {
            name: 'PullRequestReview'
          },
          {
            name: 'PullRequestReviewThread'
          },
          {
            name: 'PullRequestReviewComment'
          },
          {
            name: 'IssueComment'
          },
          {
            name: 'ClosedEvent'
          },
          {
            name: 'ReopenedEvent'
          },
          {
            name: 'SubscribedEvent'
          },
          {
            name: 'UnsubscribedEvent'
          },
          {
            name: 'MergedEvent'
          },
          {
            name: 'ReferencedEvent'
          },
          {
            name: 'CrossReferencedEvent'
          },
          {
            name: 'AssignedEvent'
          },
          {
            name: 'UnassignedEvent'
          },
          {
            name: 'LabeledEvent'
          },
          {
            name: 'UnlabeledEvent'
          },
          {
            name: 'MilestonedEvent'
          },
          {
            name: 'DemilestonedEvent'
          },
          {
            name: 'RenamedTitleEvent'
          },
          {
            name: 'LockedEvent'
          },
          {
            name: 'UnlockedEvent'
          },
          {
            name: 'DeployedEvent'
          },
          {
            name: 'DeploymentEnvironmentChangedEvent'
          },
          {
            name: 'HeadRefDeletedEvent'
          },
          {
            name: 'HeadRefRestoredEvent'
          },
          {
            name: 'HeadRefForcePushedEvent'
          },
          {
            name: 'BaseRefForcePushedEvent'
          },
          {
            name: 'ReviewRequestedEvent'
          },
          {
            name: 'ReviewRequestRemovedEvent'
          },
          {
            name: 'ReviewDismissedEvent'
          },
          {
            name: 'UserBlockedEvent'
          }
        ]
      },
      {
        kind: 'UNION',
        name: 'Closer',
        possibleTypes: [
          {
            name: 'Commit'
          },
          {
            name: 'PullRequest'
          }
        ]
      },
      {
        kind: 'UNION',
        name: 'ReferencedSubject',
        possibleTypes: [
          {
            name: 'Issue'
          },
          {
            name: 'PullRequest'
          }
        ]
      },
      {
        kind: 'UNION',
        name: 'Assignee',
        possibleTypes: [
          {
            name: 'Bot'
          },
          {
            name: 'Mannequin'
          },
          {
            name: 'Organization'
          },
          {
            name: 'User'
          }
        ]
      },
      {
        kind: 'UNION',
        name: 'MilestoneItem',
        possibleTypes: [
          {
            name: 'Issue'
          },
          {
            name: 'PullRequest'
          }
        ]
      },
      {
        kind: 'UNION',
        name: 'RenamedTitleSubject',
        possibleTypes: [
          {
            name: 'Issue'
          },
          {
            name: 'PullRequest'
          }
        ]
      },
      {
        kind: 'UNION',
        name: 'PullRequestTimelineItems',
        possibleTypes: [
          {
            name: 'PullRequestCommit'
          },
          {
            name: 'PullRequestCommitCommentThread'
          },
          {
            name: 'PullRequestReview'
          },
          {
            name: 'PullRequestReviewThread'
          },
          {
            name: 'PullRequestRevisionMarker'
          },
          {
            name: 'BaseRefChangedEvent'
          },
          {
            name: 'BaseRefForcePushedEvent'
          },
          {
            name: 'DeployedEvent'
          },
          {
            name: 'DeploymentEnvironmentChangedEvent'
          },
          {
            name: 'HeadRefDeletedEvent'
          },
          {
            name: 'HeadRefForcePushedEvent'
          },
          {
            name: 'HeadRefRestoredEvent'
          },
          {
            name: 'MergedEvent'
          },
          {
            name: 'ReviewDismissedEvent'
          },
          {
            name: 'ReviewRequestedEvent'
          },
          {
            name: 'ReviewRequestRemovedEvent'
          },
          {
            name: 'ReadyForReviewEvent'
          },
          {
            name: 'IssueComment'
          },
          {
            name: 'CrossReferencedEvent'
          },
          {
            name: 'AddedToProjectEvent'
          },
          {
            name: 'AssignedEvent'
          },
          {
            name: 'ClosedEvent'
          },
          {
            name: 'CommentDeletedEvent'
          },
          {
            name: 'ConvertedNoteToIssueEvent'
          },
          {
            name: 'DemilestonedEvent'
          },
          {
            name: 'LabeledEvent'
          },
          {
            name: 'LockedEvent'
          },
          {
            name: 'MentionedEvent'
          },
          {
            name: 'MilestonedEvent'
          },
          {
            name: 'MovedColumnsInProjectEvent'
          },
          {
            name: 'PinnedEvent'
          },
          {
            name: 'ReferencedEvent'
          },
          {
            name: 'RemovedFromProjectEvent'
          },
          {
            name: 'RenamedTitleEvent'
          },
          {
            name: 'ReopenedEvent'
          },
          {
            name: 'SubscribedEvent'
          },
          {
            name: 'TransferredEvent'
          },
          {
            name: 'UnassignedEvent'
          },
          {
            name: 'UnlabeledEvent'
          },
          {
            name: 'UnlockedEvent'
          },
          {
            name: 'UserBlockedEvent'
          },
          {
            name: 'UnpinnedEvent'
          },
          {
            name: 'UnsubscribedEvent'
          }
        ]
      },
      {
        kind: 'UNION',
        name: 'IssueTimelineItem',
        possibleTypes: [
          {
            name: 'Commit'
          },
          {
            name: 'IssueComment'
          },
          {
            name: 'CrossReferencedEvent'
          },
          {
            name: 'ClosedEvent'
          },
          {
            name: 'ReopenedEvent'
          },
          {
            name: 'SubscribedEvent'
          },
          {
            name: 'UnsubscribedEvent'
          },
          {
            name: 'ReferencedEvent'
          },
          {
            name: 'AssignedEvent'
          },
          {
            name: 'UnassignedEvent'
          },
          {
            name: 'LabeledEvent'
          },
          {
            name: 'UnlabeledEvent'
          },
          {
            name: 'UserBlockedEvent'
          },
          {
            name: 'MilestonedEvent'
          },
          {
            name: 'DemilestonedEvent'
          },
          {
            name: 'RenamedTitleEvent'
          },
          {
            name: 'LockedEvent'
          },
          {
            name: 'UnlockedEvent'
          },
          {
            name: 'TransferredEvent'
          }
        ]
      },
      {
        kind: 'UNION',
        name: 'IssueTimelineItems',
        possibleTypes: [
          {
            name: 'IssueComment'
          },
          {
            name: 'CrossReferencedEvent'
          },
          {
            name: 'AddedToProjectEvent'
          },
          {
            name: 'AssignedEvent'
          },
          {
            name: 'ClosedEvent'
          },
          {
            name: 'CommentDeletedEvent'
          },
          {
            name: 'ConvertedNoteToIssueEvent'
          },
          {
            name: 'DemilestonedEvent'
          },
          {
            name: 'LabeledEvent'
          },
          {
            name: 'LockedEvent'
          },
          {
            name: 'MentionedEvent'
          },
          {
            name: 'MilestonedEvent'
          },
          {
            name: 'MovedColumnsInProjectEvent'
          },
          {
            name: 'PinnedEvent'
          },
          {
            name: 'ReferencedEvent'
          },
          {
            name: 'RemovedFromProjectEvent'
          },
          {
            name: 'RenamedTitleEvent'
          },
          {
            name: 'ReopenedEvent'
          },
          {
            name: 'SubscribedEvent'
          },
          {
            name: 'TransferredEvent'
          },
          {
            name: 'UnassignedEvent'
          },
          {
            name: 'UnlabeledEvent'
          },
          {
            name: 'UnlockedEvent'
          },
          {
            name: 'UserBlockedEvent'
          },
          {
            name: 'UnpinnedEvent'
          },
          {
            name: 'UnsubscribedEvent'
          }
        ]
      },
      {
        kind: 'INTERFACE',
        name: 'ProfileOwner',
        possibleTypes: [
          {
            name: 'Organization'
          },
          {
            name: 'User'
          }
        ]
      },
      {
        kind: 'UNION',
        name: 'PinnableItem',
        possibleTypes: [
          {
            name: 'Gist'
          },
          {
            name: 'Repository'
          }
        ]
      },
      {
        kind: 'INTERFACE',
        name: 'Sponsorable',
        possibleTypes: [
          {
            name: 'User'
          }
        ]
      },
      {
        kind: 'INTERFACE',
        name: 'Contribution',
        possibleTypes: [
          {
            name: 'CreatedCommitContribution'
          },
          {
            name: 'CreatedIssueContribution'
          },
          {
            name: 'RestrictedContribution'
          },
          {
            name: 'CreatedPullRequestContribution'
          },
          {
            name: 'CreatedRepositoryContribution'
          },
          {
            name: 'JoinedGitHubContribution'
          },
          {
            name: 'CreatedPullRequestReviewContribution'
          }
        ]
      },
      {
        kind: 'UNION',
        name: 'CreatedIssueOrRestrictedContribution',
        possibleTypes: [
          {
            name: 'CreatedIssueContribution'
          },
          {
            name: 'RestrictedContribution'
          }
        ]
      },
      {
        kind: 'UNION',
        name: 'CreatedPullRequestOrRestrictedContribution',
        possibleTypes: [
          {
            name: 'CreatedPullRequestContribution'
          },
          {
            name: 'RestrictedContribution'
          }
        ]
      },
      {
        kind: 'UNION',
        name: 'CreatedRepositoryOrRestrictedContribution',
        possibleTypes: [
          {
            name: 'CreatedRepositoryContribution'
          },
          {
            name: 'RestrictedContribution'
          }
        ]
      },
      {
        kind: 'UNION',
        name: 'SearchResultItem',
        possibleTypes: [
          {
            name: 'Issue'
          },
          {
            name: 'PullRequest'
          },
          {
            name: 'Repository'
          },
          {
            name: 'User'
          },
          {
            name: 'Organization'
          },
          {
            name: 'MarketplaceListing'
          },
          {
            name: 'App'
          }
        ]
      },
      {
        kind: 'UNION',
        name: 'CollectionItemContent',
        possibleTypes: [
          {
            name: 'Repository'
          },
          {
            name: 'Organization'
          },
          {
            name: 'User'
          }
        ]
      }
    ]
  }
};
export default result;
