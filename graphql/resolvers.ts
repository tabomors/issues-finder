import { GetLanguageDocument, GetLanguageQuery } from "./language/getLanguage.generated";
import { GetLabelsDocument, GetLabelsQuery } from "./label/getLabels.generated";
import { IResolvers } from '../types/resolversTypes'

export default {
  Query: {
    getLanguage: (_, args, { cache }) => {
      const data = cache.readQuery<GetLanguageQuery>({
        query: GetLanguageDocument
      });
      return data ? data.language : null;
    }
  },
  Mutation: {
    setLanguage: (_, { language }, { cache }) => {
      cache.writeData({
        data: {
          language
        }
      });

      return null;
    },
    addLabel: (_, { label }, { cache }) => {
      const data = cache.readQuery<GetLabelsQuery>({
        query: GetLabelsDocument
      });
      const labels = (data && data.labels) || []
      cache.writeData({
        data: {
          labels: [...labels, label]
        }
      });

      return null;
    }
  }
} as IResolvers