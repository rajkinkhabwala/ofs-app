import { GraphQLError } from "graphql";
export interface GraphQLResult {
  items: Array< {} | null> | null | undefined;
  nextToken: string | null | undefined;
  errors: GraphQLError[] | undefined;
  extenstions: { [key: string]: any } | undefined;
}