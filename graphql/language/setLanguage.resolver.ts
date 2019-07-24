import { Resolvers } from "../../types/resolversTypes";

export default {
  Mutation: {
    setLanguage: (_, { language }, { cache }) => {
      cache.writeData({
        data: {
          language
        }
      });
    
      return null;
    }
  }
} as Resolvers;