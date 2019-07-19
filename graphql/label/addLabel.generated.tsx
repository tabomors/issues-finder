import * as Types from "../../types/types";

import gql from "graphql-tag";
import * as ReactApollo from "react-apollo";
import * as ReactApolloHooks from "react-apollo-hooks";
export type AddLabelMutationVariables = {
  label: Types.Scalars["String"];
};

export type AddLabelMutation = { __typename?: "Mutation" } & Pick<
  Types.Mutation,
  "addLabel"
>;

export const AddLabelDocument = gql`
  mutation AddLabel($label: String!) {
    addLabel(label: $label) @client
  }
`;
export type AddLabelMutationFn = ReactApollo.MutationFn<
  AddLabelMutation,
  AddLabelMutationVariables
>;

export function useAddLabelMutation(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    AddLabelMutation,
    AddLabelMutationVariables
  >
) {
  return ReactApolloHooks.useMutation<
    AddLabelMutation,
    AddLabelMutationVariables
  >(AddLabelDocument, baseOptions);
}
