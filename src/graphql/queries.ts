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
export const getDepartments = /* GraphQL */ `
  query GetDepartments($id: ID!) {
    getDepartments(id: $id) {
      id
      deparment_name
      department_id
      department_description
      Users {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listDepartments = /* GraphQL */ `
  query ListDepartments(
    $filter: ModelDepartmentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDepartments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        deparment_name
        department_id
        department_description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUsers = /* GraphQL */ `
  query GetUsers($id: ID!) {
    getUsers(id: $id) {
      id
      name
      email
      phone
      address
      picture
      description
      departmentsID
      role
      AssignmentSubmissions {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        phone
        address
        picture
        description
        departmentsID
        role
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const usersByDepartmentsID = /* GraphQL */ `
  query UsersByDepartmentsID(
    $departmentsID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersByDepartmentsID(
      departmentsID: $departmentsID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        email
        phone
        address
        picture
        description
        departmentsID
        role
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAssignmentSubmissions = /* GraphQL */ `
  query GetAssignmentSubmissions($id: ID!) {
    getAssignmentSubmissions(id: $id) {
      id
      assignmentsID
      usersID
      number_of_files
      grade
      submission_comment
      checker
      createdAt
      updatedAt
    }
  }
`;
export const listAssignmentSubmissions = /* GraphQL */ `
  query ListAssignmentSubmissions(
    $filter: ModelAssignmentSubmissionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAssignmentSubmissions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        assignmentsID
        usersID
        number_of_files
        grade
        submission_comment
        checker
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const assignmentSubmissionsByAssignmentsID = /* GraphQL */ `
  query AssignmentSubmissionsByAssignmentsID(
    $assignmentsID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAssignmentSubmissionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    assignmentSubmissionsByAssignmentsID(
      assignmentsID: $assignmentsID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        assignmentsID
        usersID
        number_of_files
        grade
        submission_comment
        checker
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const assignmentSubmissionsByUsersID = /* GraphQL */ `
  query AssignmentSubmissionsByUsersID(
    $usersID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAssignmentSubmissionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    assignmentSubmissionsByUsersID(
      usersID: $usersID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        assignmentsID
        usersID
        number_of_files
        grade
        submission_comment
        checker
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAssignments = /* GraphQL */ `
  query GetAssignments($id: ID!) {
    getAssignments(id: $id) {
      id
      assignment_name
      assignment_desc
      resubmit
      teacher
      max_bytes
      time_due
      time_available
      grade
      extra_data
      AssignmentSubmissions {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listAssignments = /* GraphQL */ `
  query ListAssignments(
    $filter: ModelAssignmentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAssignments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        assignment_name
        assignment_desc
        resubmit
        teacher
        max_bytes
        time_due
        time_available
        grade
        extra_data
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
