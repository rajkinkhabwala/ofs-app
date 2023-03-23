import { API } from "aws-amplify";
import * as mutations from '../../../../graphql/mutations';
import * as queries from '../../../../graphql/queries';
import { GraphQLQuery, graphqlOperation, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { CreateCoursesInput, CreateCoursesMutation, DeleteCoursesInput, GetCoursesQuery, ListCoursesQuery, ModelCoursesFilterInput, UpdateCoursesInput, UpdateCoursesMutation } from "../../../../API";


export async function createCourse(course: CreateCoursesInput) {
    return await API.graphql<GraphQLQuery<CreateCoursesMutation>>({...graphqlOperation(mutations.createCourses, { input: course }), authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS})
}

export async function updateCourse(course: UpdateCoursesInput) {
    return await API.graphql<GraphQLQuery<UpdateCoursesMutation>>({...graphqlOperation(mutations.updateCourses, { input: course }), authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS})
}

export async function deleteCourse(course: DeleteCoursesInput) {
    return await API.graphql<GraphQLQuery<DeleteCoursesInput>>({...graphqlOperation(mutations.deleteCourses, { input: course }), authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS})
}

export async function listCourse(
    filter?: ModelCoursesFilterInput,
    limit?: number,
    nextToken?: string
) {
    return await API.graphql<GraphQLQuery<ListCoursesQuery>>(graphqlOperation(queries.listCourses, {
        filter: filter,
        limit: limit,
        nextToken: nextToken
    }))
}

export async function getCourse(course: string) {
    return await API.graphql<GraphQLQuery<GetCoursesQuery>>(graphqlOperation(queries.getCourses, { id: course }))
}