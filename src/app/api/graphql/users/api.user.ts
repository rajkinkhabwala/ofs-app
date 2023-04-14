import { API } from "aws-amplify";
import * as mutations from '../../../../graphql/mutations';
import * as queries from '../../../../graphql/queries';
import { GraphQLQuery, graphqlOperation, GRAPHQL_AUTH_MODE} from '@aws-amplify/api';
import { CreateUsersInput, CreateUsersMutation, DeleteUsersInput, GetUsersQuery, ListUsersQuery, ListUsersQueryVariables, ModelUsersFilterInput, UpdateUsersInput, UpdateUsersMutation, Users } from "../../../../API";
import { GraphQLResult, UserGraphQLResult } from "../../../types/result.type";


export async function createUser(user: CreateUsersInput) {
    return await API.graphql<GraphQLQuery<CreateUsersMutation>>({...graphqlOperation(mutations.createUsers, { input: user }), authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS})
}

export async function updateUser(user: UpdateUsersInput) {
    return await API.graphql<GraphQLQuery<UpdateUsersMutation>>({...graphqlOperation(mutations.updateUsers, { input: user }), authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS})
}

export async function deleteUser(user: DeleteUsersInput) {
    return await API.graphql<GraphQLQuery<DeleteUsersInput>>({...graphqlOperation(mutations.deleteUsers, { input: user }), authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS})
}

export async function listUser(input?: ListUsersQueryVariables): Promise<UserGraphQLResult> {
    return await new Promise((resolve, reject) =>{
        API.graphql<GraphQLQuery<ListUsersQuery>>({ ...graphqlOperation(queries.listUsers, {input: input}),
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
    }).then((value) => {
    resolve({
        items: value.data?.listUsers?.items as Users[],
        nextToken: value.data?.listUsers?.nextToken,
        errors: value.errors,
        extenstions: value.extensions,
    })
    }).catch((err) => reject(err))
    })
}



export async function getUser(user: string) {
    return await API.graphql<GraphQLQuery<GetUsersQuery>>(graphqlOperation(queries.getUsers, { id: user }))
}