import { API } from "aws-amplify";
import * as mutations from '../../../../graphql/mutations';
import * as queries from '../../../../graphql/queries';
import { GraphQLQuery, graphqlOperation, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { CreateDepartmentsInput, CreateDepartmentsMutation, DeleteDepartmentsMutation, GetDepartmentsQuery, ListAnnouncementsQueryVariables, ListDepartmentsQuery, UpdateDepartmentsInput, UpdateDepartmentsMutation } from "../../../../API";
import { GraphQLResult } from "../../../types/result.type";


export async function createDepartment(department: CreateDepartmentsInput) {
    return await API.graphql<GraphQLQuery<CreateDepartmentsMutation>>({...graphqlOperation(mutations.createDepartments, { input: department }), authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS})
}

export async function updateDepartment(department: UpdateDepartmentsInput) {
    return await API.graphql<GraphQLQuery<UpdateDepartmentsMutation>>({...graphqlOperation(mutations.updateDepartments, { input: department }), authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS})
}

export async function deleteDepartment(id: string) {
    return await API.graphql<GraphQLQuery<DeleteDepartmentsMutation>>({...graphqlOperation(mutations.deleteDepartments, { input: {
        id: id
    } }), authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS})
    
}

export async function listDepartment(
    input?: ListAnnouncementsQueryVariables
): Promise<GraphQLResult> {
    return await new Promise((resolve, reject) =>{
        API.graphql<GraphQLQuery<ListDepartmentsQuery>>({ ...graphqlOperation(queries.listDepartments, {input}),
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
    }).then((value) => {
    resolve({
        items: value.data?.listDepartments?.items,
        nextToken: value.data?.listDepartments?.nextToken,
        errors: value.errors,
        extenstions: value.extensions,
    })
    }).catch((err) => reject(err))
    })
}

export async function getDepartment(department: string) {
    return await API.graphql<GraphQLQuery<GetDepartmentsQuery>>(graphqlOperation(queries.getDepartments, { id: department }))
}
