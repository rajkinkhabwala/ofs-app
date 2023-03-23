/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAnnouncements = /* GraphQL */ `
  subscription OnCreateAnnouncements(
    $filter: ModelSubscriptionAnnouncementsFilterInput
  ) {
    onCreateAnnouncements(filter: $filter) {
      id
      title
      announcement
      coursesID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAnnouncements = /* GraphQL */ `
  subscription OnUpdateAnnouncements(
    $filter: ModelSubscriptionAnnouncementsFilterInput
  ) {
    onUpdateAnnouncements(filter: $filter) {
      id
      title
      announcement
      coursesID
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAnnouncements = /* GraphQL */ `
  subscription OnDeleteAnnouncements(
    $filter: ModelSubscriptionAnnouncementsFilterInput
  ) {
    onDeleteAnnouncements(filter: $filter) {
      id
      title
      announcement
      coursesID
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCourses = /* GraphQL */ `
  subscription OnCreateCourses($filter: ModelSubscriptionCoursesFilterInput) {
    onCreateCourses(filter: $filter) {
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
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCourses = /* GraphQL */ `
  subscription OnUpdateCourses($filter: ModelSubscriptionCoursesFilterInput) {
    onUpdateCourses(filter: $filter) {
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
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCourses = /* GraphQL */ `
  subscription OnDeleteCourses($filter: ModelSubscriptionCoursesFilterInput) {
    onDeleteCourses(filter: $filter) {
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
      createdAt
      updatedAt
    }
  }
`;
export const onCreateDepartments = /* GraphQL */ `
  subscription OnCreateDepartments(
    $filter: ModelSubscriptionDepartmentsFilterInput
  ) {
    onCreateDepartments(filter: $filter) {
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
export const onUpdateDepartments = /* GraphQL */ `
  subscription OnUpdateDepartments(
    $filter: ModelSubscriptionDepartmentsFilterInput
  ) {
    onUpdateDepartments(filter: $filter) {
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
export const onDeleteDepartments = /* GraphQL */ `
  subscription OnDeleteDepartments(
    $filter: ModelSubscriptionDepartmentsFilterInput
  ) {
    onDeleteDepartments(filter: $filter) {
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
export const onCreateUsers = /* GraphQL */ `
  subscription OnCreateUsers($filter: ModelSubscriptionUsersFilterInput) {
    onCreateUsers(filter: $filter) {
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
export const onUpdateUsers = /* GraphQL */ `
  subscription OnUpdateUsers($filter: ModelSubscriptionUsersFilterInput) {
    onUpdateUsers(filter: $filter) {
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
export const onDeleteUsers = /* GraphQL */ `
  subscription OnDeleteUsers($filter: ModelSubscriptionUsersFilterInput) {
    onDeleteUsers(filter: $filter) {
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
export const onCreateAssignmentSubmissions = /* GraphQL */ `
  subscription OnCreateAssignmentSubmissions(
    $filter: ModelSubscriptionAssignmentSubmissionsFilterInput
  ) {
    onCreateAssignmentSubmissions(filter: $filter) {
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
export const onUpdateAssignmentSubmissions = /* GraphQL */ `
  subscription OnUpdateAssignmentSubmissions(
    $filter: ModelSubscriptionAssignmentSubmissionsFilterInput
  ) {
    onUpdateAssignmentSubmissions(filter: $filter) {
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
export const onDeleteAssignmentSubmissions = /* GraphQL */ `
  subscription OnDeleteAssignmentSubmissions(
    $filter: ModelSubscriptionAssignmentSubmissionsFilterInput
  ) {
    onDeleteAssignmentSubmissions(filter: $filter) {
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
export const onCreateAssignments = /* GraphQL */ `
  subscription OnCreateAssignments(
    $filter: ModelSubscriptionAssignmentsFilterInput
  ) {
    onCreateAssignments(filter: $filter) {
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
export const onUpdateAssignments = /* GraphQL */ `
  subscription OnUpdateAssignments(
    $filter: ModelSubscriptionAssignmentsFilterInput
  ) {
    onUpdateAssignments(filter: $filter) {
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
export const onDeleteAssignments = /* GraphQL */ `
  subscription OnDeleteAssignments(
    $filter: ModelSubscriptionAssignmentsFilterInput
  ) {
    onDeleteAssignments(filter: $filter) {
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
