/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCourses = /* GraphQL */ `
  query GetCourses($id: ID!) {
    getCourses(id: $id) {
      id
      course_name
      course_code
      course_visibility
      course_start_date
      course_end_date
      course_description
      course_image
      course_format
      course_credit
      createdAt
      updatedAt
    }
  }
`;
export const listCourses = /* GraphQL */ `
  query ListCourses(
    $filter: ModelCoursesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        course_name
        course_code
        course_visibility
        course_start_date
        course_end_date
        course_description
        course_image
        course_format
        course_credit
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
