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
