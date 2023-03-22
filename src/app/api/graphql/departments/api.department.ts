import { API } from "aws-amplify";
import * as mutations from '../../../../graphql/mutations';
import * as queries from '../../../../graphql/queries';
import { GraphQLQuery, graphqlOperation, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { CreateDepartmentsInput, CreateDepartmentsMutation, DeleteDepartmentsInput, GetDepartmentsQuery, GetUsersQuery, ListAnnouncementsQueryVariables, ListDepartmentsQuery, ModelDepartmentsFilterInput, UpdateDepartmentsInput, UpdateDepartmentsMutation } from "../../../../API";


export async function createDepartment(department: CreateDepartmentsInput) {
    return await API.graphql<GraphQLQuery<CreateDepartmentsMutation>>({...graphqlOperation(mutations.createDepartments, { input: department }), authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS})
}

export async function updateDepartment(department: UpdateDepartmentsInput) {
    return await API.graphql<GraphQLQuery<UpdateDepartmentsMutation>>(graphqlOperation(mutations.updateDepartments, { input: department }))
}

export async function deleteDepartment(department: DeleteDepartmentsInput) {
    return await API.graphql<GraphQLQuery<DeleteDepartmentsInput>>(graphqlOperation(mutations.deleteDepartments, { input: department }))
}

export async function listDepartment(
    filter?: ModelDepartmentsFilterInput,
    limit?: number,
    nextToken?: string
) {
    return await API.graphql<GraphQLQuery<ListDepartmentsQuery>>(graphqlOperation(queries.listDepartments, {
        filter: filter,
        limit: limit,
        nextToken: nextToken
    }))
}

export async function getDepartment(department: string) {
    return await API.graphql<GraphQLQuery<GetDepartmentsQuery>>(graphqlOperation(queries.getDepartments, { id: department }))
}

export async function listDepartmentsQuery(department: ListDepartmentsQuery) {
    return await API.graphql<GraphQLQuery<ListAnnouncementsQueryVariables>>({
        query: queries.usersByDepartmentsID,
        variables: department
    })
}