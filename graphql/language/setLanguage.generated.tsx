import * as Types from '../../types/types';

import gql from 'graphql-tag';
import * as ReactApollo from 'react-apollo';
import * as ReactApolloHooks from 'react-apollo-hooks';
export type SetLanguageMutationVariables = {
  language: Types.Scalars['String'];
};

export type SetLanguageMutation = { __typename?: 'Mutation' } & Pick<
  Types.Mutation,
  'setLanguage'
>;

export const SetLanguageDocument = gql`
  mutation SetLanguage($language: String!) {
    setLanguage(language: $language) @client
  }
`;
export type SetLanguageMutationFn = ReactApollo.MutationFn<
  SetLanguageMutation,
  SetLanguageMutationVariables
>;

export function useSetLanguageMutation(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    SetLanguageMutation,
    SetLanguageMutationVariables
  >
) {
  return ReactApolloHooks.useMutation<
    SetLanguageMutation,
    SetLanguageMutationVariables
  >(SetLanguageDocument, baseOptions);
}
