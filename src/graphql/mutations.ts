/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAnnouncements = /* GraphQL */ `
  mutation CreateAnnouncements(
    $input: CreateAnnouncementsInput!
    $condition: ModelAnnouncementsConditionInput
  ) {
    createAnnouncements(input: $input, condition: $condition) {
      id
      title
      announcement
      coursesID
      createdAt
      updatedAt
    }
  }
`;
export const updateAnnouncements = /* GraphQL */ `
  mutation UpdateAnnouncements(
    $input: UpdateAnnouncementsInput!
    $condition: ModelAnnouncementsConditionInput
  ) {
    updateAnnouncements(input: $input, condition: $condition) {
      id
      title
      announcement
      coursesID
      createdAt
      updatedAt
    }
  }
`;
export const deleteAnnouncements = /* GraphQL */ `
  mutation DeleteAnnouncements(
    $input: DeleteAnnouncementsInput!
    $condition: ModelAnnouncementsConditionInput
  ) {
    deleteAnnouncements(input: $input, condition: $condition) {
      id
      title
      announcement
      coursesID
      createdAt
      updatedAt
    }
  }
`;
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
      Announcements {
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
          AssignmentSubmissions {
            nextToken
          }
          coursesID
          createdAt
          updatedAt
        }
        nextToken
      }
      departmentsID
      Users {
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
            department
            role
            createdAt
            updatedAt
          }
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
      Announcements {
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
          AssignmentSubmissions {
            nextToken
          }
          coursesID
          createdAt
          updatedAt
        }
        nextToken
      }
      departmentsID
      Users {
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
            department
            role
            createdAt
            updatedAt
          }
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
      Announcements {
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
          AssignmentSubmissions {
            nextToken
          }
          coursesID
          createdAt
          updatedAt
        }
        nextToken
      }
      departmentsID
      Users {
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
            department
            role
            createdAt
            updatedAt
          }
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
export const createDepartments = /* GraphQL */ `
  mutation CreateDepartments(
    $input: CreateDepartmentsInput!
    $condition: ModelDepartmentsConditionInput
  ) {
    createDepartments(input: $input, condition: $condition) {
      id
      department_name
      department_id
      department_description
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
          Announcements {
            nextToken
          }
          Assignments {
            nextToken
          }
          departmentsID
          Users {
            nextToken
          }
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
export const updateDepartments = /* GraphQL */ `
  mutation UpdateDepartments(
    $input: UpdateDepartmentsInput!
    $condition: ModelDepartmentsConditionInput
  ) {
    updateDepartments(input: $input, condition: $condition) {
      id
      department_name
      department_id
      department_description
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
          Announcements {
            nextToken
          }
          Assignments {
            nextToken
          }
          departmentsID
          Users {
            nextToken
          }
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
export const deleteDepartments = /* GraphQL */ `
  mutation DeleteDepartments(
    $input: DeleteDepartmentsInput!
    $condition: ModelDepartmentsConditionInput
  ) {
    deleteDepartments(input: $input, condition: $condition) {
      id
      department_name
      department_id
      department_description
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
          Announcements {
            nextToken
          }
          Assignments {
            nextToken
          }
          departmentsID
          Users {
            nextToken
          }
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
export const createUsers = /* GraphQL */ `
  mutation CreateUsers(
    $input: CreateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    createUsers(input: $input, condition: $condition) {
      id
      email
      name
      phone
      address
      picture
      description
      department
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
            department
            role
            createdAt
            updatedAt
          }
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
export const updateUsers = /* GraphQL */ `
  mutation UpdateUsers(
    $input: UpdateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    updateUsers(input: $input, condition: $condition) {
      id
      email
      name
      phone
      address
      picture
      description
      department
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
            department
            role
            createdAt
            updatedAt
          }
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
export const deleteUsers = /* GraphQL */ `
  mutation DeleteUsers(
    $input: DeleteUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    deleteUsers(input: $input, condition: $condition) {
      id
      email
      name
      phone
      address
      picture
      description
      department
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
            department
            role
            createdAt
            updatedAt
          }
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
export const createAssignmentSubmissions = /* GraphQL */ `
  mutation CreateAssignmentSubmissions(
    $input: CreateAssignmentSubmissionsInput!
    $condition: ModelAssignmentSubmissionsConditionInput
  ) {
    createAssignmentSubmissions(input: $input, condition: $condition) {
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
export const updateAssignmentSubmissions = /* GraphQL */ `
  mutation UpdateAssignmentSubmissions(
    $input: UpdateAssignmentSubmissionsInput!
    $condition: ModelAssignmentSubmissionsConditionInput
  ) {
    updateAssignmentSubmissions(input: $input, condition: $condition) {
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
export const deleteAssignmentSubmissions = /* GraphQL */ `
  mutation DeleteAssignmentSubmissions(
    $input: DeleteAssignmentSubmissionsInput!
    $condition: ModelAssignmentSubmissionsConditionInput
  ) {
    deleteAssignmentSubmissions(input: $input, condition: $condition) {
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
export const createAssignments = /* GraphQL */ `
  mutation CreateAssignments(
    $input: CreateAssignmentsInput!
    $condition: ModelAssignmentsConditionInput
  ) {
    createAssignments(input: $input, condition: $condition) {
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
export const updateAssignments = /* GraphQL */ `
  mutation UpdateAssignments(
    $input: UpdateAssignmentsInput!
    $condition: ModelAssignmentsConditionInput
  ) {
    updateAssignments(input: $input, condition: $condition) {
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
export const deleteAssignments = /* GraphQL */ `
  mutation DeleteAssignments(
    $input: DeleteAssignmentsInput!
    $condition: ModelAssignmentsConditionInput
  ) {
    deleteAssignments(input: $input, condition: $condition) {
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
export const createCoursesUsers = /* GraphQL */ `
  mutation CreateCoursesUsers(
    $input: CreateCoursesUsersInput!
    $condition: ModelCoursesUsersConditionInput
  ) {
    createCoursesUsers(input: $input, condition: $condition) {
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
        Users {
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
      users {
        id
        email
        name
        phone
        address
        picture
        description
        department
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
      createdAt
      updatedAt
    }
  }
`;
export const updateCoursesUsers = /* GraphQL */ `
  mutation UpdateCoursesUsers(
    $input: UpdateCoursesUsersInput!
    $condition: ModelCoursesUsersConditionInput
  ) {
    updateCoursesUsers(input: $input, condition: $condition) {
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
        Users {
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
      users {
        id
        email
        name
        phone
        address
        picture
        description
        department
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
      createdAt
      updatedAt
    }
  }
`;
export const deleteCoursesUsers = /* GraphQL */ `
  mutation DeleteCoursesUsers(
    $input: DeleteCoursesUsersInput!
    $condition: ModelCoursesUsersConditionInput
  ) {
    deleteCoursesUsers(input: $input, condition: $condition) {
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
        Users {
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
      users {
        id
        email
        name
        phone
        address
        picture
        description
        department
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
      createdAt
      updatedAt
    }
  }
`;
