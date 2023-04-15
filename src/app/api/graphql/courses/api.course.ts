import { API } from "aws-amplify";
import * as mutations from '../../../../graphql/mutations';
import * as queries from '../../../../graphql/queries';
import { GraphQLQuery, graphqlOperation, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { CreateCoursesInput, CreateCoursesMutation, Courses, DeleteCoursesMutation, GetCoursesQuery, ListCoursesQuery, ModelCoursesFilterInput, UpdateCoursesInput, UpdateCoursesMutation } from "../../../../API";
import { CourseGraphQLResult, GraphQLResult } from "../../../types/result.type";


export async function createCourse(course: CreateCoursesInput) {
    return await API.graphql<GraphQLQuery<CreateCoursesMutation>>({...graphqlOperation(mutations.createCourses, { input: course }), authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS})
}

export async function updateCourse(course: UpdateCoursesInput) {
    return await API.graphql<GraphQLQuery<UpdateCoursesMutation>>({...graphqlOperation(mutations.updateCourses, { input: course }), authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS})
}

export async function deleteCourse(id: string) {
    return await API.graphql<GraphQLQuery<DeleteCoursesMutation>>({...graphqlOperation(mutations.deleteCourses, { input: { id: id} }), authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS})
}

export async function listCourse(
    filter?: ModelCoursesFilterInput,
    limit?: number,
    nextToken?: string
) :Promise<CourseGraphQLResult> {
        return await new Promise((resolve, reject) =>{
            API.graphql<GraphQLQuery<ListCoursesQuery>>(graphqlOperation(queries.listCourses, {
                filter: filter,
                limit: limit,
                nextToken: nextToken
            })).then((value) => {
        resolve({
            items: value.data?.listCourses?.items as Courses[],
            nextToken: value.data?.listCourses?.nextToken,
            errors: value.errors,
            extenstions: value.extensions,
        })
        }).catch((err) => reject(err))
        })
    }

export async function getCourse(course: string) {
    return await API.graphql<GraphQLQuery<GetCoursesQuery>>(graphqlOperation(queries.getCourses, { id: course }))
}