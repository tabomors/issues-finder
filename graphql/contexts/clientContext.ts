import { DataProxy } from "apollo-cache";

export interface ClientContext {
  cache: DataProxy;
  getCacheKey: (options: { __typename: string; id: string }) => string;
}
