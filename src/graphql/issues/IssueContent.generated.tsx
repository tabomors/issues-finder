import * as Types from '../../types/graphqlTypes';

const endpointUrl = '/api/graphql';
export type IssueContentFragment = { __typename?: 'Issue', state: Types.IssueState, url: any, id: string, closed: boolean, body: string, createdAt: any, title: string, repository: { __typename?: 'Repository', name: string, url: any }, labels?: { __typename?: 'LabelConnection', totalCount: number, nodes?: Array<{ __typename?: 'Label', name: string, color: string } | null> | null } | null, comments: { __typename?: 'IssueCommentConnection', totalCount: number } };

export const IssueContentFragmentDoc = `
    fragment IssueContent on Issue {
  state
  url
  id
  repository {
    name
    url
  }
  closed
  labels(first: 10) {
    totalCount
    nodes {
      name
      color
    }
  }
  body
  createdAt
  comments {
    totalCount
  }
  title
}
    `;