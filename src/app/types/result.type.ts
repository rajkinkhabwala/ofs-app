import { GraphQLError } from "graphql";
export interface GraphQLResult {
    items: [] | undefined;
  nextToken: string | null | undefined;
  errors: GraphQLError[] | undefined;
  extenstions: { [key: string]: any } | undefined;
}