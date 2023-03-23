import { API } from "aws-amplify";
import * as mutations from '../../../../graphql/mutations';
import * as queries from '../../../../graphql/queries';
import { GraphQLQuery, graphqlOperation, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { AnnouncementsByCoursesIDQuery, AnnouncementsByCoursesIDQueryVariables, CreateAnnouncementsInput, CreateAnnouncementsMutation, DeleteAnnouncementsInput, GetAnnouncementsQuery, ListAnnouncementsQuery, ModelAnnouncementsFilterInput, ModelSortDirection, UpdateAnnouncementsInput, UpdateAnnouncementsMutation } from "../../../../API";


export async function createAnnouncement(announcement: CreateAnnouncementsInput) {
    return await API.graphql<GraphQLQuery<CreateAnnouncementsMutation>>({...graphqlOperation(mutations.createAnnouncements, { input: announcement }), authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS})
}

export async function updateAnnouncement(announcement: UpdateAnnouncementsInput) {
    return await API.graphql<GraphQLQuery<UpdateAnnouncementsMutation>>({...graphqlOperation(mutations.updateAnnouncements, { input: announcement }), authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS})
}

export async function deleteAnnouncement(announcement: DeleteAnnouncementsInput) {
    return await API.graphql<GraphQLQuery<DeleteAnnouncementsInput>>({...graphqlOperation(mutations.deleteAnnouncements, { input: announcement }), authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS})
}

export async function listAnnouncement(
    filter?: ModelAnnouncementsFilterInput,
    limit?: number,
    nextToken?: string
) {
    return await API.graphql<GraphQLQuery<ListAnnouncementsQuery>>(graphqlOperation(queries.listAnnouncements, {
        filter: filter,
        limit: limit,
        nextToken: nextToken
    }))
}

export async function getAnnouncement(announcement: string) {
    return await API.graphql<GraphQLQuery<GetAnnouncementsQuery>>(graphqlOperation(queries.getAnnouncements, { id: announcement }))
}

export async function listAnnouncementsByCourseID(
    course: AnnouncementsByCoursesIDQueryVariables) {
    return await API.graphql<GraphQLQuery<AnnouncementsByCoursesIDQuery>>({
        query: queries.announcementsByCoursesID,
        variables: course
    })
}