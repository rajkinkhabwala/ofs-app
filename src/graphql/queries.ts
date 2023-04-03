/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAnnouncements = /* GraphQL */ `
  query GetAnnouncements($id: ID!) {
    getAnnouncements(id: $id) {
      id
      title
      announcement
      coursesID
      createdAt
      updatedAt
    }
  }
`;
export const listAnnouncements = /* GraphQL */ `
  query ListAnnouncements(
    $filter: ModelAnnouncementsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAnnouncements(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        announcement
        coursesID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const announcementsByCoursesID = /* GraphQL */ `
  query AnnouncementsByCoursesID(
    $coursesID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAnnouncementsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    announcementsByCoursesID(
      coursesID: $coursesID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        announcement
        coursesID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
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
      Announcements {
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
          coursesID
          createdAt
          updatedAt
        }
        nextToken
      }
      Assignments {
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
          coursesID
          createdAt
          updatedAt
        }
        nextToken
      }
      departmentsID
      users {
        items {
          id
          coursesId
          usersId
          createdAt
          updatedAt
        }
        nextToken
      }
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
        Announcements {
          nextToken
        }
        Assignments {
          nextToken
        }
        departmentsID
        users {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const coursesByDepartmentsID = /* GraphQL */ `
  query CoursesByDepartmentsID(
    $departmentsID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCoursesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    coursesByDepartmentsID(
      departmentsID: $departmentsID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        Announcements {
          nextToken
        }
        Assignments {
          nextToken
        }
        departmentsID
        users {
          nextToken
        }
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
      department_name
      department_id
      department_description
      Users {
        items {
          id
          email
          name
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
      Courses {
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
          departmentsID
          createdAt
          updatedAt
        }
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
        department_name
        department_id
        department_description
        Users {
          nextToken
        }
        Courses {
          nextToken
        }
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
      email
      name
      phone
      address
      picture
      description
      departmentsID
      role
      AssignmentSubmissions {
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
      Courses {
        items {
          id
          coursesId
          usersId
          createdAt
          updatedAt
        }
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
        email
        name
        phone
        address
        picture
        description
        departmentsID
        role
        AssignmentSubmissions {
          nextToken
        }
        Courses {
          nextToken
        }
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
        email
        name
        phone
        address
        picture
        description
        departmentsID
        role
        AssignmentSubmissions {
          nextToken
        }
        Courses {
          nextToken
        }
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
      coursesID
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
        AssignmentSubmissions {
          nextToken
        }
        coursesID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const assignmentsByCoursesID = /* GraphQL */ `
  query AssignmentsByCoursesID(
    $coursesID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAssignmentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    assignmentsByCoursesID(
      coursesID: $coursesID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        AssignmentSubmissions {
          nextToken
        }
        coursesID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCoursesUsers = /* GraphQL */ `
  query GetCoursesUsers($id: ID!) {
    getCoursesUsers(id: $id) {
      id
      coursesId
      usersId
      courses {
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
        Announcements {
          nextToken
        }
        Assignments {
          nextToken
        }
        departmentsID
        users {
          nextToken
        }
        createdAt
        updatedAt
      }
      users {
        id
        email
        name
        phone
        address
        picture
        description
        departmentsID
        role
        AssignmentSubmissions {
          nextToken
        }
        Courses {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCoursesUsers = /* GraphQL */ `
  query ListCoursesUsers(
    $filter: ModelCoursesUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCoursesUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        coursesId
        usersId
        courses {
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
          departmentsID
          createdAt
          updatedAt
        }
        users {
          id
          email
          name
          phone
          address
          picture
          description
          departmentsID
          role
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const coursesUsersByCoursesId = /* GraphQL */ `
  query CoursesUsersByCoursesId(
    $coursesId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCoursesUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    coursesUsersByCoursesId(
      coursesId: $coursesId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        coursesId
        usersId
        courses {
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
          departmentsID
          createdAt
          updatedAt
        }
        users {
          id
          email
          name
          phone
          address
          picture
          description
          departmentsID
          role
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const coursesUsersByUsersId = /* GraphQL */ `
  query CoursesUsersByUsersId(
    $usersId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCoursesUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    coursesUsersByUsersId(
      usersId: $usersId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        coursesId
        usersId
        courses {
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
          departmentsID
          createdAt
          updatedAt
        }
        users {
          id
          email
          name
          phone
          address
          picture
          description
          departmentsID
          role
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
