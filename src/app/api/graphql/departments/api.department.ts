import { API } from "aws-amplify";
import * as mutations from '../../../../graphql/mutations';
import * as queries from '../../../../graphql/queries';
import { GraphQLQuery, graphqlOperation } from '@aws-amplify/api';
import { CreateDepartmentsInput, CreateDepartmentsMutation, DeleteDepartmentsInput, GetDepartmentsQuery, ListDepartmentsQuery, ModelDepartmentsFilterInput, UpdateDepartmentsInput, UpdateDepartmentsMutation } from "../../../../API";


export async function createDepartment(department: CreateDepartmentsInput) {
    return await API.graphql<GraphQLQuery<CreateDepartmentsMutation>>(graphqlOperation(mutations.createDepartments, { input: department }))
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