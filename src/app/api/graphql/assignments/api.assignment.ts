import { API } from "aws-amplify";
import * as mutations from '../../../../graphql/mutations';
import * as queries from '../../../../graphql/queries';
import { GraphQLQuery, graphqlOperation, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { AssignmentSubmissionsByAssignmentsIDQuery, AssignmentSubmissionsByAssignmentsIDQueryVariables, CreateAssignmentsInput, CreateAssignmentsMutation, DeleteAssignmentsInput, GetAssignmentsQuery, ListAssignmentsQuery, ModelAssignmentsFilterInput, UpdateAssignmentsInput, UpdateAssignmentsMutation } from "../../../../API";


export async function createAssignment(assignment: CreateAssignmentsInput) {
    return await API.graphql<GraphQLQuery<CreateAssignmentsMutation>>({...graphqlOperation(mutations.createAssignments, { input: assignment }), authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS})
}

export async function updateAssignment(assignment: UpdateAssignmentsInput) {
    return await API.graphql<GraphQLQuery<UpdateAssignmentsMutation>>({...graphqlOperation(mutations.updateAssignments, { input: assignment }), authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS})
}

export async function deleteAssignment(assignment: DeleteAssignmentsInput) {
    return await API.graphql<GraphQLQuery<DeleteAssignmentsInput>>({...graphqlOperation(mutations.deleteAssignments, { input: assignment }), authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS})
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

export async function listAssignmentSubmissionByAssignmentID(assignment: AssignmentSubmissionsByAssignmentsIDQueryVariables) {
    return await API.graphql<GraphQLQuery<AssignmentSubmissionsByAssignmentsIDQuery>>(graphqlOperation(queries.assignmentSubmissionsByAssignmentsID, assignment))
}