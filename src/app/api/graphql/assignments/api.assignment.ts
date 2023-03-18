import { API } from "aws-amplify";
import * as mutations from '../../../../graphql/mutations';
import * as queries from '../../../../graphql/queries';
import { GraphQLQuery, graphqlOperation } from '@aws-amplify/api';
import { CreateAssignmentsInput, CreateAssignmentsMutation, DeleteAssignmentsInput, GetAssignmentsQuery, ListAssignmentsQuery, ModelAssignmentsFilterInput, UpdateAssignmentsInput, UpdateAssignmentsMutation } from "../../../../API";


export async function createAssignment(assignment: CreateAssignmentsInput) {
    return await API.graphql<GraphQLQuery<CreateAssignmentsMutation>>(graphqlOperation(mutations.createAssignments, { input: assignment }))
}

export async function updateAssignment(assignment: UpdateAssignmentsInput) {
    return await API.graphql<GraphQLQuery<UpdateAssignmentsMutation>>(graphqlOperation(mutations.updateAssignments, { input: assignment }))
}

export async function deleteAssignment(assignment: DeleteAssignmentsInput) {
    return await API.graphql<GraphQLQuery<DeleteAssignmentsInput>>(graphqlOperation(mutations.deleteAssignments, { input: assignment }))
}

export async function listAssignment(
    filter?: ModelAssignmentsFilterInput,
    limit?: number,
    nextToken?: string
) {
    return await API.graphql<GraphQLQuery<ListAssignmentsQuery>>(graphqlOperation(queries.listAssignments, {
        filter: filter,
        limit: limit,
        nextToken: nextToken
    }))
}

export async function getAssignment(assignment: string) {
    return await API.graphql<GraphQLQuery<GetAssignmentsQuery>>(graphqlOperation(queries.getAssignments, { id: assignment }))
}