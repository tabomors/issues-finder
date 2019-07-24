import {
  GetLabelsDocument,
  GetLabelsQuery
} from "../label/getLabels.generated";
import { Resolvers } from "../../types/resolversTypes";

export default {
  Mutation: {
    addLabel: (_, { label }, { cache }) => {
      const data = cache.readQuery<GetLabelsQuery>({
        query: GetLabelsDocument
      });
      const labels = (data && data.labels) || [];
      cache.writeData({
        data: {
          labels: [...labels, label]
        }
      });

      return null;
    }
  }
} as Resolvers;
