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

/**
 * __useSetLanguageMutation__
 *
 * To run a mutation, you first call `useSetLanguageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetLanguageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setLanguageMutation, { data, loading, error }] = useSetLanguageMutation({
 *   variables: {
 *      language: // value for 'language'
 *   },
 * });
 */
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
