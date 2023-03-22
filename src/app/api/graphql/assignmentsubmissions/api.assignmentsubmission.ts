import { API } from "aws-amplify";
import * as mutations from '../../../../graphql/mutations';
import * as queries from '../../../../graphql/queries';
import { GraphQLQuery, graphqlOperation, GRAPHQL_AUTH_MODE} from '@aws-amplify/api';
import { CreateAssignmentSubmissionsInput, CreateAssignmentSubmissionsMutation, DeleteAssignmentSubmissionsInput, GetAssignmentSubmissionsQuery, ListAssignmentSubmissionsQuery, ModelAssignmentSubmissionsFilterInput, UpdateAssignmentSubmissionsInput, UpdateAssignmentSubmissionsMutation } from "../../../../API";


export async function createAssignmentSubmission(assignmentSubmission: CreateAssignmentSubmissionsInput) {
    return await API.graphql<GraphQLQuery<CreateAssignmentSubmissionsMutation>>({...graphqlOperation(mutations.createAssignmentSubmissions, { input: assignmentSubmission }), authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS})
}

export async function updateAssignmentSubmission(assignmentSubmission: UpdateAssignmentSubmissionsInput) {
    return await API.graphql<GraphQLQuery<UpdateAssignmentSubmissionsMutation>>(graphqlOperation(mutations.updateAssignmentSubmissions, { input: assignmentSubmission }))
}

export async function deleteAssignmentSubmission(assignmentSubmission: DeleteAssignmentSubmissionsInput) {
    return await API.graphql<GraphQLQuery<DeleteAssignmentSubmissionsInput>>(graphqlOperation(mutations.deleteAssignmentSubmissions, { input: assignmentSubmission }))
}

export async function listAssignmentSubmission(
    filter?: ModelAssignmentSubmissionsFilterInput,
    limit?: number,
    nextToken?: string
) {
    return await API.graphql<GraphQLQuery<ListAssignmentSubmissionsQuery>>(graphqlOperation(queries.listAssignmentSubmissions, {
        filter: filter,
        limit: limit,
        nextToken: nextToken
    }))
}

export async function getAssignmentSubmission(assignmentSubmission: string) {
    return await API.graphql<GraphQLQuery<GetAssignmentSubmissionsQuery>>(graphqlOperation(queries.getAssignmentSubmissions, { id: assignmentSubmission }))
}