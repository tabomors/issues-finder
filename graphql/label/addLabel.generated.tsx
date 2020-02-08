import * as Types from '../../types/types';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type AddLabelMutationVariables = {
  label: Types.Scalars['String'];
};

export type AddLabelMutation = { __typename?: 'Mutation' } & Pick<
  Types.Mutation,
  'addLabel'
>;

export const AddLabelDocument = gql`
  mutation AddLabel($label: String!) {
    addLabel(label: $label) @client
  }
`;
export type AddLabelMutationFn = ApolloReactCommon.MutationFunction<
  AddLabelMutation,
  AddLabelMutationVariables
>;

/**
 * __useAddLabelMutation__
 *
 * To run a mutation, you first call `useAddLabelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddLabelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addLabelMutation, { data, loading, error }] = useAddLabelMutation({
 *   variables: {
 *      label: // value for 'label'
 *   },
 * });
 */
export function useAddLabelMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    AddLabelMutation,
    AddLabelMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    AddLabelMutation,
    AddLabelMutationVariables
  >(AddLabelDocument, baseOptions);
}
export type AddLabelMutationHookResult = ReturnType<typeof useAddLabelMutation>;
export type AddLabelMutationResult = ApolloReactCommon.MutationResult<
  AddLabelMutation
>;
export type AddLabelMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddLabelMutation,
  AddLabelMutationVariables
>;
