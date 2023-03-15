/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCourses = /* GraphQL */ `
  mutation CreateCourses(
    $input: CreateCoursesInput!
    $condition: ModelCoursesConditionInput
  ) {
    createCourses(input: $input, condition: $condition) {
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
export const updateCourses = /* GraphQL */ `
  mutation UpdateCourses(
    $input: UpdateCoursesInput!
    $condition: ModelCoursesConditionInput
  ) {
    updateCourses(input: $input, condition: $condition) {
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
export const deleteCourses = /* GraphQL */ `
  mutation DeleteCourses(
    $input: DeleteCoursesInput!
    $condition: ModelCoursesConditionInput
  ) {
    deleteCourses(input: $input, condition: $condition) {
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
