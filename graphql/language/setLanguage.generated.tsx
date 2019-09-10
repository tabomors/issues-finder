import * as Types from '../../types/types';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
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
export type SetLanguageMutationFn = ApolloReactCommon.MutationFunction<
  SetLanguageMutation,
  SetLanguageMutationVariables
>;

export function useSetLanguageMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    SetLanguageMutation,
    SetLanguageMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    SetLanguageMutation,
    SetLanguageMutationVariables
  >(SetLanguageDocument, baseOptions);
}
export type SetLanguageMutationHookResult = ReturnType<
  typeof useSetLanguageMutation
>;
export type SetLanguageMutationResult = ApolloReactCommon.MutationResult<
  SetLanguageMutation
>;
export type SetLanguageMutationOptions = ApolloReactCommon.BaseMutationOptions<
  SetLanguageMutation,
  SetLanguageMutationVariables
>;
