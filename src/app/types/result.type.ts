import { GraphQLError } from "graphql";
import { Departments, Users, Courses } from "../../API";
export interface GraphQLResult {
  items: Array< {} | null> | null | undefined;
  nextToken: string | null | undefined;
  errors: GraphQLError[] | undefined;
  extenstions: { [key: string]: any } | undefined;
}

export interface UserGraphQLResult extends Omit<GraphQLResult, 'items'> {
  items: Users[] | null | undefined
}

export interface DepartmentGraphQLResult extends Omit<GraphQLResult, 'items'> {
  items: Departments[] | any | null | undefined
}

export interface CourseGraphQLResult extends Omit<GraphQLResult, 'items'> {
  items: Courses[] | any | null | undefined
}