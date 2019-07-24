import { GetLanguageDocument, GetLanguageQuery } from "./getLanguage.generated";
import { Resolvers } from "../../types/resolversTypes";

export default {
  Query: {
    getLanguage: (_, args, { cache }) => {
      const data = cache.readQuery<GetLanguageQuery>({
        query: GetLanguageDocument
      });
      return data ? data.language : null;
    }
  }
} as Resolvers;