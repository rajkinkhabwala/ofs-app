import { API } from "aws-amplify";
import * as mutations from '../../../../graphql/mutations';
import * as queries from '../../../../graphql/queries';
import { GraphQLQuery, graphqlOperation } from '@aws-amplify/api';
import { CreateCoursesInput, CreateCoursesMutation, DeleteCoursesInput, GetCoursesQuery, GetCoursesQueryVariables, ListCoursesQuery, ModelCoursesFilterInput, UpdateCoursesInput, UpdateCoursesMutation } from "../../../../API";


export async function createCourse(course: CreateCoursesInput) {
    return await API.graphql<GraphQLQuery<CreateCoursesMutation>>(graphqlOperation(mutations.createCourses, { input: course }))
}

export async function updateCourse(course: UpdateCoursesInput) {
    return await API.graphql<GraphQLQuery<UpdateCoursesMutation>>(graphqlOperation(mutations.updateCourses, { input: course }))
}

export async function deleteCourse(course: DeleteCoursesInput) {
    return await API.graphql<GraphQLQuery<DeleteCoursesInput>>(graphqlOperation(mutations.deleteCourses, { input: course }))
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

export async function getCourse(course: GetCoursesQueryVariables) {
    return await API.graphql<GraphQLQuery<GetCoursesQuery>>(graphqlOperation(queries.getCourses, { id: course }))
}