import { API } from "aws-amplify";
import * as mutations from '../../../../graphql/mutations';
import * as queries from '../../../../graphql/queries';
import { GraphQLQuery, graphqlOperation } from '@aws-amplify/api';
import { CreateAnnouncementsInput, CreateAnnouncementsMutation, DeleteAnnouncementsInput, GetAnnouncementsQuery, ListAnnouncementsQuery, ModelAnnouncementsFilterInput, UpdateAnnouncementsInput, UpdateAnnouncementsMutation } from "../../../../API";


export async function createAnnouncement(announcement: CreateAnnouncementsInput) {
    return await API.graphql<GraphQLQuery<CreateAnnouncementsMutation>>(graphqlOperation(mutations.createAnnouncements, { input: announcement }))
}

export async function updateAnnouncement(announcement: UpdateAnnouncementsInput) {
    return await API.graphql<GraphQLQuery<UpdateAnnouncementsMutation>>(graphqlOperation(mutations.updateAnnouncements, { input: announcement }))
}

export async function deleteAnnouncement(announcement: DeleteAnnouncementsInput) {
    return await API.graphql<GraphQLQuery<DeleteAnnouncementsInput>>(graphqlOperation(mutations.deleteAnnouncements, { input: announcement }))
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