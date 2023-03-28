/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateAnnouncementsInput = {
  id?: string | null,
  title?: string | null,
  announcement?: string | null,
  coursesID: string,
};

export type ModelAnnouncementsConditionInput = {
  title?: ModelStringInput | null,
  announcement?: ModelStringInput | null,
  coursesID?: ModelIDInput | null,
  and?: Array< ModelAnnouncementsConditionInput | null > | null,
  or?: Array< ModelAnnouncementsConditionInput | null > | null,
  not?: ModelAnnouncementsConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Announcements = {
  __typename: "Announcements",
  id: string,
  title?: string | null,
  announcement?: string | null,
  coursesID: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateAnnouncementsInput = {
  id: string,
  title?: string | null,
  announcement?: string | null,
  coursesID?: string | null,
};

export type DeleteAnnouncementsInput = {
  id: string,
};

export type CreateCoursesInput = {
  id?: string | null,
  course_name: string,
  course_code: string,
  course_visibility: boolean,
  course_start_date?: string | null,
  course_end_date?: string | null,
  course_description?: string | null,
  course_image?: string | null,
  course_format?: CourseFormat | null,
  course_credit?: number | null,
};

export enum CourseFormat {
  WEEKY = "WEEKY",
}


export type ModelCoursesConditionInput = {
  course_name?: ModelStringInput | null,
  course_code?: ModelStringInput | null,
  course_visibility?: ModelBooleanInput | null,
  course_start_date?: ModelStringInput | null,
  course_end_date?: ModelStringInput | null,
  course_description?: ModelStringInput | null,
  course_image?: ModelStringInput | null,
  course_format?: ModelCourseFormatInput | null,
  course_credit?: ModelIntInput | null,
  and?: Array< ModelCoursesConditionInput | null > | null,
  or?: Array< ModelCoursesConditionInput | null > | null,
  not?: ModelCoursesConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelCourseFormatInput = {
  eq?: CourseFormat | null,
  ne?: CourseFormat | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Courses = {
  __typename: "Courses",
  id: string,
  course_name: string,
  course_code: string,
  course_visibility: boolean,
  course_start_date?: string | null,
  course_end_date?: string | null,
  course_description?: string | null,
  course_image?: string | null,
  course_format?: CourseFormat | null,
  course_credit?: number | null,
  Announcements?: ModelAnnouncementsConnection | null,
  Assignments?: ModelAnnouncementsConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelAnnouncementsConnection = {
  __typename: "ModelAnnouncementsConnection",
  items:  Array<Announcements | null >,
  nextToken?: string | null,
};

export type UpdateCoursesInput = {
  id: string,
  course_name?: string | null,
  course_code?: string | null,
  course_visibility?: boolean | null,
  course_start_date?: string | null,
  course_end_date?: string | null,
  course_description?: string | null,
  course_image?: string | null,
  course_format?: CourseFormat | null,
  course_credit?: number | null,
};

export type DeleteCoursesInput = {
  id: string,
};

export type CreateDepartmentsInput = {
  id?: string | null,
  department_name?: string | null,
  department_id?: string | null,
  department_description?: string | null,
};

export type ModelDepartmentsConditionInput = {
  department_name?: ModelStringInput | null,
  department_id?: ModelStringInput | null,
  department_description?: ModelStringInput | null,
  and?: Array< ModelDepartmentsConditionInput | null > | null,
  or?: Array< ModelDepartmentsConditionInput | null > | null,
  not?: ModelDepartmentsConditionInput | null,
};

export type Departments = {
  __typename: "Departments",
  id: string,
  department_name?: string | null,
  department_id?: string | null,
  department_description?: string | null,
  Users?: ModelUsersConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelUsersConnection = {
  __typename: "ModelUsersConnection",
  items:  Array<Users | null >,
  nextToken?: string | null,
};

export type Users = {
  __typename: "Users",
  id: string,
  email?: string | null,
  name?: string | null,
  phone?: string | null,
  address?: string | null,
  picture?: string | null,
  description?: string | null,
  departmentsID: string,
  role?: string | null,
  AssignmentSubmissions?: ModelAssignmentSubmissionsConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelAssignmentSubmissionsConnection = {
  __typename: "ModelAssignmentSubmissionsConnection",
  items:  Array<AssignmentSubmissions | null >,
  nextToken?: string | null,
};

export type AssignmentSubmissions = {
  __typename: "AssignmentSubmissions",
  id: string,
  assignmentsID: string,
  usersID: string,
  number_of_files?: number | null,
  grade?: number | null,
  submission_comment?: string | null,
  checker: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateDepartmentsInput = {
  id: string,
  department_name?: string | null,
  department_id?: string | null,
  department_description?: string | null,
};

export type DeleteDepartmentsInput = {
  id: string,
};

export type CreateUsersInput = {
  id?: string | null,
  email?: string | null,
  name?: string | null,
  phone?: string | null,
  address?: string | null,
  picture?: string | null,
  description?: string | null,
  departmentsID: string,
  role?: string | null,
};

export type ModelUsersConditionInput = {
  email?: ModelStringInput | null,
  name?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  address?: ModelStringInput | null,
  picture?: ModelStringInput | null,
  description?: ModelStringInput | null,
  departmentsID?: ModelIDInput | null,
  role?: ModelStringInput | null,
  and?: Array< ModelUsersConditionInput | null > | null,
  or?: Array< ModelUsersConditionInput | null > | null,
  not?: ModelUsersConditionInput | null,
};

export type UpdateUsersInput = {
  id: string,
  email?: string | null,
  name?: string | null,
  phone?: string | null,
  address?: string | null,
  picture?: string | null,
  description?: string | null,
  departmentsID?: string | null,
  role?: string | null,
};

export type DeleteUsersInput = {
  id: string,
};

export type CreateAssignmentSubmissionsInput = {
  id?: string | null,
  assignmentsID: string,
  usersID: string,
  number_of_files?: number | null,
  grade?: number | null,
  submission_comment?: string | null,
  checker: string,
};

export type ModelAssignmentSubmissionsConditionInput = {
  assignmentsID?: ModelIDInput | null,
  usersID?: ModelIDInput | null,
  number_of_files?: ModelIntInput | null,
  grade?: ModelIntInput | null,
  submission_comment?: ModelStringInput | null,
  checker?: ModelIDInput | null,
  and?: Array< ModelAssignmentSubmissionsConditionInput | null > | null,
  or?: Array< ModelAssignmentSubmissionsConditionInput | null > | null,
  not?: ModelAssignmentSubmissionsConditionInput | null,
};

export type UpdateAssignmentSubmissionsInput = {
  id: string,
  assignmentsID?: string | null,
  usersID?: string | null,
  number_of_files?: number | null,
  grade?: number | null,
  submission_comment?: string | null,
  checker?: string | null,
};

export type DeleteAssignmentSubmissionsInput = {
  id: string,
};

export type CreateAssignmentsInput = {
  id?: string | null,
  assignment_name: string,
  assignment_desc: string,
  resubmit: number,
  teacher: string,
  max_bytes?: number | null,
  time_due?: string | null,
  time_available?: string | null,
  grade: number,
  extra_data?: string | null,
  coursesID: string,
};

export type ModelAssignmentsConditionInput = {
  assignment_name?: ModelStringInput | null,
  assignment_desc?: ModelStringInput | null,
  resubmit?: ModelIntInput | null,
  teacher?: ModelIDInput | null,
  max_bytes?: ModelIntInput | null,
  time_due?: ModelStringInput | null,
  time_available?: ModelStringInput | null,
  grade?: ModelIntInput | null,
  extra_data?: ModelStringInput | null,
  coursesID?: ModelIDInput | null,
  and?: Array< ModelAssignmentsConditionInput | null > | null,
  or?: Array< ModelAssignmentsConditionInput | null > | null,
  not?: ModelAssignmentsConditionInput | null,
};

export type Assignments = {
  __typename: "Assignments",
  id: string,
  assignment_name: string,
  assignment_desc: string,
  resubmit: number,
  teacher: string,
  max_bytes?: number | null,
  time_due?: string | null,
  time_available?: string | null,
  grade: number,
  extra_data?: string | null,
  AssignmentSubmissions?: ModelAssignmentSubmissionsConnection | null,
  coursesID: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateAssignmentsInput = {
  id: string,
  assignment_name?: string | null,
  assignment_desc?: string | null,
  resubmit?: number | null,
  teacher?: string | null,
  max_bytes?: number | null,
  time_due?: string | null,
  time_available?: string | null,
  grade?: number | null,
  extra_data?: string | null,
  coursesID?: string | null,
};

export type DeleteAssignmentsInput = {
  id: string,
};

export type ModelAnnouncementsFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  announcement?: ModelStringInput | null,
  coursesID?: ModelIDInput | null,
  and?: Array< ModelAnnouncementsFilterInput | null > | null,
  or?: Array< ModelAnnouncementsFilterInput | null > | null,
  not?: ModelAnnouncementsFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelCoursesFilterInput = {
  id?: ModelIDInput | null,
  course_name?: ModelStringInput | null,
  course_code?: ModelStringInput | null,
  course_visibility?: ModelBooleanInput | null,
  course_start_date?: ModelStringInput | null,
  course_end_date?: ModelStringInput | null,
  course_description?: ModelStringInput | null,
  course_image?: ModelStringInput | null,
  course_format?: ModelCourseFormatInput | null,
  course_credit?: ModelIntInput | null,
  and?: Array< ModelCoursesFilterInput | null > | null,
  or?: Array< ModelCoursesFilterInput | null > | null,
  not?: ModelCoursesFilterInput | null,
};

export type ModelCoursesConnection = {
  __typename: "ModelCoursesConnection",
  items:  Array<Courses | null >,
  nextToken?: string | null,
};

export type ModelDepartmentsFilterInput = {
  id?: ModelIDInput | null,
  department_name?: ModelStringInput | null,
  department_id?: ModelStringInput | null,
  department_description?: ModelStringInput | null,
  and?: Array< ModelDepartmentsFilterInput | null > | null,
  or?: Array< ModelDepartmentsFilterInput | null > | null,
  not?: ModelDepartmentsFilterInput | null,
};

export type ModelDepartmentsConnection = {
  __typename: "ModelDepartmentsConnection",
  items:  Array<Departments | null >,
  nextToken?: string | null,
};

export type ModelUsersFilterInput = {
  id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  name?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  address?: ModelStringInput | null,
  picture?: ModelStringInput | null,
  description?: ModelStringInput | null,
  departmentsID?: ModelIDInput | null,
  role?: ModelStringInput | null,
  and?: Array< ModelUsersFilterInput | null > | null,
  or?: Array< ModelUsersFilterInput | null > | null,
  not?: ModelUsersFilterInput | null,
};

export type ModelAssignmentSubmissionsFilterInput = {
  id?: ModelIDInput | null,
  assignmentsID?: ModelIDInput | null,
  usersID?: ModelIDInput | null,
  number_of_files?: ModelIntInput | null,
  grade?: ModelIntInput | null,
  submission_comment?: ModelStringInput | null,
  checker?: ModelIDInput | null,
  and?: Array< ModelAssignmentSubmissionsFilterInput | null > | null,
  or?: Array< ModelAssignmentSubmissionsFilterInput | null > | null,
  not?: ModelAssignmentSubmissionsFilterInput | null,
};

export type ModelAssignmentsFilterInput = {
  id?: ModelIDInput | null,
  assignment_name?: ModelStringInput | null,
  assignment_desc?: ModelStringInput | null,
  resubmit?: ModelIntInput | null,
  teacher?: ModelIDInput | null,
  max_bytes?: ModelIntInput | null,
  time_due?: ModelStringInput | null,
  time_available?: ModelStringInput | null,
  grade?: ModelIntInput | null,
  extra_data?: ModelStringInput | null,
  coursesID?: ModelIDInput | null,
  and?: Array< ModelAssignmentsFilterInput | null > | null,
  or?: Array< ModelAssignmentsFilterInput | null > | null,
  not?: ModelAssignmentsFilterInput | null,
};

export type ModelAssignmentsConnection = {
  __typename: "ModelAssignmentsConnection",
  items:  Array<Assignments | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionAnnouncementsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  announcement?: ModelSubscriptionStringInput | null,
  coursesID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionAnnouncementsFilterInput | null > | null,
  or?: Array< ModelSubscriptionAnnouncementsFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionCoursesFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  course_name?: ModelSubscriptionStringInput | null,
  course_code?: ModelSubscriptionStringInput | null,
  course_visibility?: ModelSubscriptionBooleanInput | null,
  course_start_date?: ModelSubscriptionStringInput | null,
  course_end_date?: ModelSubscriptionStringInput | null,
  course_description?: ModelSubscriptionStringInput | null,
  course_image?: ModelSubscriptionStringInput | null,
  course_format?: ModelSubscriptionStringInput | null,
  course_credit?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionCoursesFilterInput | null > | null,
  or?: Array< ModelSubscriptionCoursesFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionDepartmentsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  department_name?: ModelSubscriptionStringInput | null,
  department_id?: ModelSubscriptionStringInput | null,
  department_description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionDepartmentsFilterInput | null > | null,
  or?: Array< ModelSubscriptionDepartmentsFilterInput | null > | null,
};

export type ModelSubscriptionUsersFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  email?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  phone?: ModelSubscriptionStringInput | null,
  address?: ModelSubscriptionStringInput | null,
  picture?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  departmentsID?: ModelSubscriptionIDInput | null,
  role?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUsersFilterInput | null > | null,
  or?: Array< ModelSubscriptionUsersFilterInput | null > | null,
};

export type ModelSubscriptionAssignmentSubmissionsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  assignmentsID?: ModelSubscriptionIDInput | null,
  usersID?: ModelSubscriptionIDInput | null,
  number_of_files?: ModelSubscriptionIntInput | null,
  grade?: ModelSubscriptionIntInput | null,
  submission_comment?: ModelSubscriptionStringInput | null,
  checker?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionAssignmentSubmissionsFilterInput | null > | null,
  or?: Array< ModelSubscriptionAssignmentSubmissionsFilterInput | null > | null,
};

export type ModelSubscriptionAssignmentsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  assignment_name?: ModelSubscriptionStringInput | null,
  assignment_desc?: ModelSubscriptionStringInput | null,
  resubmit?: ModelSubscriptionIntInput | null,
  teacher?: ModelSubscriptionIDInput | null,
  max_bytes?: ModelSubscriptionIntInput | null,
  time_due?: ModelSubscriptionStringInput | null,
  time_available?: ModelSubscriptionStringInput | null,
  grade?: ModelSubscriptionIntInput | null,
  extra_data?: ModelSubscriptionStringInput | null,
  coursesID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionAssignmentsFilterInput | null > | null,
  or?: Array< ModelSubscriptionAssignmentsFilterInput | null > | null,
};

export type CreateAnnouncementsMutationVariables = {
  input: CreateAnnouncementsInput,
  condition?: ModelAnnouncementsConditionInput | null,
};

export type CreateAnnouncementsMutation = {
  createAnnouncements?:  {
    __typename: "Announcements",
    id: string,
    title?: string | null,
    announcement?: string | null,
    coursesID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAnnouncementsMutationVariables = {
  input: UpdateAnnouncementsInput,
  condition?: ModelAnnouncementsConditionInput | null,
};

export type UpdateAnnouncementsMutation = {
  updateAnnouncements?:  {
    __typename: "Announcements",
    id: string,
    title?: string | null,
    announcement?: string | null,
    coursesID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAnnouncementsMutationVariables = {
  input: DeleteAnnouncementsInput,
  condition?: ModelAnnouncementsConditionInput | null,
};

export type DeleteAnnouncementsMutation = {
  deleteAnnouncements?:  {
    __typename: "Announcements",
    id: string,
    title?: string | null,
    announcement?: string | null,
    coursesID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCoursesMutationVariables = {
  input: CreateCoursesInput,
  condition?: ModelCoursesConditionInput | null,
};

export type CreateCoursesMutation = {
  createCourses?:  {
    __typename: "Courses",
    id: string,
    course_name: string,
    course_code: string,
    course_visibility: boolean,
    course_start_date?: string | null,
    course_end_date?: string | null,
    course_description?: string | null,
    course_image?: string | null,
    course_format?: CourseFormat | null,
    course_credit?: number | null,
    Announcements?:  {
      __typename: "ModelAnnouncementsConnection",
      items:  Array< {
        __typename: "Announcements",
        id: string,
        title?: string | null,
        announcement?: string | null,
        coursesID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Assignments?:  {
      __typename: "ModelAnnouncementsConnection",
      items:  Array< {
        __typename: "Announcements",
        id: string,
        title?: string | null,
        announcement?: string | null,
        coursesID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCoursesMutationVariables = {
  input: UpdateCoursesInput,
  condition?: ModelCoursesConditionInput | null,
};

export type UpdateCoursesMutation = {
  updateCourses?:  {
    __typename: "Courses",
    id: string,
    course_name: string,
    course_code: string,
    course_visibility: boolean,
    course_start_date?: string | null,
    course_end_date?: string | null,
    course_description?: string | null,
    course_image?: string | null,
    course_format?: CourseFormat | null,
    course_credit?: number | null,
    Announcements?:  {
      __typename: "ModelAnnouncementsConnection",
      items:  Array< {
        __typename: "Announcements",
        id: string,
        title?: string | null,
        announcement?: string | null,
        coursesID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Assignments?:  {
      __typename: "ModelAnnouncementsConnection",
      items:  Array< {
        __typename: "Announcements",
        id: string,
        title?: string | null,
        announcement?: string | null,
        coursesID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCoursesMutationVariables = {
  input: DeleteCoursesInput,
  condition?: ModelCoursesConditionInput | null,
};

export type DeleteCoursesMutation = {
  deleteCourses?:  {
    __typename: "Courses",
    id: string,
    course_name: string,
    course_code: string,
    course_visibility: boolean,
    course_start_date?: string | null,
    course_end_date?: string | null,
    course_description?: string | null,
    course_image?: string | null,
    course_format?: CourseFormat | null,
    course_credit?: number | null,
    Announcements?:  {
      __typename: "ModelAnnouncementsConnection",
      items:  Array< {
        __typename: "Announcements",
        id: string,
        title?: string | null,
        announcement?: string | null,
        coursesID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Assignments?:  {
      __typename: "ModelAnnouncementsConnection",
      items:  Array< {
        __typename: "Announcements",
        id: string,
        title?: string | null,
        announcement?: string | null,
        coursesID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateDepartmentsMutationVariables = {
  input: CreateDepartmentsInput,
  condition?: ModelDepartmentsConditionInput | null,
};

export type CreateDepartmentsMutation = {
  createDepartments?:  {
    __typename: "Departments",
    id: string,
    department_name?: string | null,
    department_id?: string | null,
    department_description?: string | null,
    Users?:  {
      __typename: "ModelUsersConnection",
      items:  Array< {
        __typename: "Users",
        id: string,
        email?: string | null,
        name?: string | null,
        phone?: string | null,
        address?: string | null,
        picture?: string | null,
        description?: string | null,
        departmentsID: string,
        role?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateDepartmentsMutationVariables = {
  input: UpdateDepartmentsInput,
  condition?: ModelDepartmentsConditionInput | null,
};

export type UpdateDepartmentsMutation = {
  updateDepartments?:  {
    __typename: "Departments",
    id: string,
    department_name?: string | null,
    department_id?: string | null,
    department_description?: string | null,
    Users?:  {
      __typename: "ModelUsersConnection",
      items:  Array< {
        __typename: "Users",
        id: string,
        email?: string | null,
        name?: string | null,
        phone?: string | null,
        address?: string | null,
        picture?: string | null,
        description?: string | null,
        departmentsID: string,
        role?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteDepartmentsMutationVariables = {
  input: DeleteDepartmentsInput,
  condition?: ModelDepartmentsConditionInput | null,
};

export type DeleteDepartmentsMutation = {
  deleteDepartments?:  {
    __typename: "Departments",
    id: string,
    department_name?: string | null,
    department_id?: string | null,
    department_description?: string | null,
    Users?:  {
      __typename: "ModelUsersConnection",
      items:  Array< {
        __typename: "Users",
        id: string,
        email?: string | null,
        name?: string | null,
        phone?: string | null,
        address?: string | null,
        picture?: string | null,
        description?: string | null,
        departmentsID: string,
        role?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUsersMutationVariables = {
  input: CreateUsersInput,
  condition?: ModelUsersConditionInput | null,
};

export type CreateUsersMutation = {
  createUsers?:  {
    __typename: "Users",
    id: string,
    email?: string | null,
    name?: string | null,
    phone?: string | null,
    address?: string | null,
    picture?: string | null,
    description?: string | null,
    departmentsID: string,
    role?: string | null,
    AssignmentSubmissions?:  {
      __typename: "ModelAssignmentSubmissionsConnection",
      items:  Array< {
        __typename: "AssignmentSubmissions",
        id: string,
        assignmentsID: string,
        usersID: string,
        number_of_files?: number | null,
        grade?: number | null,
        submission_comment?: string | null,
        checker: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUsersMutationVariables = {
  input: UpdateUsersInput,
  condition?: ModelUsersConditionInput | null,
};

export type UpdateUsersMutation = {
  updateUsers?:  {
    __typename: "Users",
    id: string,
    email?: string | null,
    name?: string | null,
    phone?: string | null,
    address?: string | null,
    picture?: string | null,
    description?: string | null,
    departmentsID: string,
    role?: string | null,
    AssignmentSubmissions?:  {
      __typename: "ModelAssignmentSubmissionsConnection",
      items:  Array< {
        __typename: "AssignmentSubmissions",
        id: string,
        assignmentsID: string,
        usersID: string,
        number_of_files?: number | null,
        grade?: number | null,
        submission_comment?: string | null,
        checker: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUsersMutationVariables = {
  input: DeleteUsersInput,
  condition?: ModelUsersConditionInput | null,
};

export type DeleteUsersMutation = {
  deleteUsers?:  {
    __typename: "Users",
    id: string,
    email?: string | null,
    name?: string | null,
    phone?: string | null,
    address?: string | null,
    picture?: string | null,
    description?: string | null,
    departmentsID: string,
    role?: string | null,
    AssignmentSubmissions?:  {
      __typename: "ModelAssignmentSubmissionsConnection",
      items:  Array< {
        __typename: "AssignmentSubmissions",
        id: string,
        assignmentsID: string,
        usersID: string,
        number_of_files?: number | null,
        grade?: number | null,
        submission_comment?: string | null,
        checker: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAssignmentSubmissionsMutationVariables = {
  input: CreateAssignmentSubmissionsInput,
  condition?: ModelAssignmentSubmissionsConditionInput | null,
};

export type CreateAssignmentSubmissionsMutation = {
  createAssignmentSubmissions?:  {
    __typename: "AssignmentSubmissions",
    id: string,
    assignmentsID: string,
    usersID: string,
    number_of_files?: number | null,
    grade?: number | null,
    submission_comment?: string | null,
    checker: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAssignmentSubmissionsMutationVariables = {
  input: UpdateAssignmentSubmissionsInput,
  condition?: ModelAssignmentSubmissionsConditionInput | null,
};

export type UpdateAssignmentSubmissionsMutation = {
  updateAssignmentSubmissions?:  {
    __typename: "AssignmentSubmissions",
    id: string,
    assignmentsID: string,
    usersID: string,
    number_of_files?: number | null,
    grade?: number | null,
    submission_comment?: string | null,
    checker: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAssignmentSubmissionsMutationVariables = {
  input: DeleteAssignmentSubmissionsInput,
  condition?: ModelAssignmentSubmissionsConditionInput | null,
};

export type DeleteAssignmentSubmissionsMutation = {
  deleteAssignmentSubmissions?:  {
    __typename: "AssignmentSubmissions",
    id: string,
    assignmentsID: string,
    usersID: string,
    number_of_files?: number | null,
    grade?: number | null,
    submission_comment?: string | null,
    checker: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAssignmentsMutationVariables = {
  input: CreateAssignmentsInput,
  condition?: ModelAssignmentsConditionInput | null,
};

export type CreateAssignmentsMutation = {
  createAssignments?:  {
    __typename: "Assignments",
    id: string,
    assignment_name: string,
    assignment_desc: string,
    resubmit: number,
    teacher: string,
    max_bytes?: number | null,
    time_due?: string | null,
    time_available?: string | null,
    grade: number,
    extra_data?: string | null,
    AssignmentSubmissions?:  {
      __typename: "ModelAssignmentSubmissionsConnection",
      items:  Array< {
        __typename: "AssignmentSubmissions",
        id: string,
        assignmentsID: string,
        usersID: string,
        number_of_files?: number | null,
        grade?: number | null,
        submission_comment?: string | null,
        checker: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    coursesID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAssignmentsMutationVariables = {
  input: UpdateAssignmentsInput,
  condition?: ModelAssignmentsConditionInput | null,
};

export type UpdateAssignmentsMutation = {
  updateAssignments?:  {
    __typename: "Assignments",
    id: string,
    assignment_name: string,
    assignment_desc: string,
    resubmit: number,
    teacher: string,
    max_bytes?: number | null,
    time_due?: string | null,
    time_available?: string | null,
    grade: number,
    extra_data?: string | null,
    AssignmentSubmissions?:  {
      __typename: "ModelAssignmentSubmissionsConnection",
      items:  Array< {
        __typename: "AssignmentSubmissions",
        id: string,
        assignmentsID: string,
        usersID: string,
        number_of_files?: number | null,
        grade?: number | null,
        submission_comment?: string | null,
        checker: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    coursesID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAssignmentsMutationVariables = {
  input: DeleteAssignmentsInput,
  condition?: ModelAssignmentsConditionInput | null,
};

export type DeleteAssignmentsMutation = {
  deleteAssignments?:  {
    __typename: "Assignments",
    id: string,
    assignment_name: string,
    assignment_desc: string,
    resubmit: number,
    teacher: string,
    max_bytes?: number | null,
    time_due?: string | null,
    time_available?: string | null,
    grade: number,
    extra_data?: string | null,
    AssignmentSubmissions?:  {
      __typename: "ModelAssignmentSubmissionsConnection",
      items:  Array< {
        __typename: "AssignmentSubmissions",
        id: string,
        assignmentsID: string,
        usersID: string,
        number_of_files?: number | null,
        grade?: number | null,
        submission_comment?: string | null,
        checker: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    coursesID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetAnnouncementsQueryVariables = {
  id: string,
};

export type GetAnnouncementsQuery = {
  getAnnouncements?:  {
    __typename: "Announcements",
    id: string,
    title?: string | null,
    announcement?: string | null,
    coursesID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAnnouncementsQueryVariables = {
  filter?: ModelAnnouncementsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAnnouncementsQuery = {
  listAnnouncements?:  {
    __typename: "ModelAnnouncementsConnection",
    items:  Array< {
      __typename: "Announcements",
      id: string,
      title?: string | null,
      announcement?: string | null,
      coursesID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AnnouncementsByCoursesIDQueryVariables = {
  coursesID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAnnouncementsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AnnouncementsByCoursesIDQuery = {
  announcementsByCoursesID?:  {
    __typename: "ModelAnnouncementsConnection",
    items:  Array< {
      __typename: "Announcements",
      id: string,
      title?: string | null,
      announcement?: string | null,
      coursesID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCoursesQueryVariables = {
  id: string,
};

export type GetCoursesQuery = {
  getCourses?:  {
    __typename: "Courses",
    id: string,
    course_name: string,
    course_code: string,
    course_visibility: boolean,
    course_start_date?: string | null,
    course_end_date?: string | null,
    course_description?: string | null,
    course_image?: string | null,
    course_format?: CourseFormat | null,
    course_credit?: number | null,
    Announcements?:  {
      __typename: "ModelAnnouncementsConnection",
      items:  Array< {
        __typename: "Announcements",
        id: string,
        title?: string | null,
        announcement?: string | null,
        coursesID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Assignments?:  {
      __typename: "ModelAnnouncementsConnection",
      items:  Array< {
        __typename: "Announcements",
        id: string,
        title?: string | null,
        announcement?: string | null,
        coursesID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCoursesQueryVariables = {
  filter?: ModelCoursesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCoursesQuery = {
  listCourses?:  {
    __typename: "ModelCoursesConnection",
    items:  Array< {
      __typename: "Courses",
      id: string,
      course_name: string,
      course_code: string,
      course_visibility: boolean,
      course_start_date?: string | null,
      course_end_date?: string | null,
      course_description?: string | null,
      course_image?: string | null,
      course_format?: CourseFormat | null,
      course_credit?: number | null,
      Announcements?:  {
        __typename: "ModelAnnouncementsConnection",
        nextToken?: string | null,
      } | null,
      Assignments?:  {
        __typename: "ModelAnnouncementsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetDepartmentsQueryVariables = {
  id: string,
};

export type GetDepartmentsQuery = {
  getDepartments?:  {
    __typename: "Departments",
    id: string,
    department_name?: string | null,
    department_id?: string | null,
    department_description?: string | null,
    Users?:  {
      __typename: "ModelUsersConnection",
      items:  Array< {
        __typename: "Users",
        id: string,
        email?: string | null,
        name?: string | null,
        phone?: string | null,
        address?: string | null,
        picture?: string | null,
        description?: string | null,
        departmentsID: string,
        role?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListDepartmentsQueryVariables = {
  filter?: ModelDepartmentsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDepartmentsQuery = {
  listDepartments?:  {
    __typename: "ModelDepartmentsConnection",
    items:  Array< {
      __typename: "Departments",
      id: string,
      department_name?: string | null,
      department_id?: string | null,
      department_description?: string | null,
      Users?:  {
        __typename: "ModelUsersConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUsersQueryVariables = {
  id: string,
};

export type GetUsersQuery = {
  getUsers?:  {
    __typename: "Users",
    id: string,
    email?: string | null,
    name?: string | null,
    phone?: string | null,
    address?: string | null,
    picture?: string | null,
    description?: string | null,
    departmentsID: string,
    role?: string | null,
    AssignmentSubmissions?:  {
      __typename: "ModelAssignmentSubmissionsConnection",
      items:  Array< {
        __typename: "AssignmentSubmissions",
        id: string,
        assignmentsID: string,
        usersID: string,
        number_of_files?: number | null,
        grade?: number | null,
        submission_comment?: string | null,
        checker: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUsersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUsersConnection",
    items:  Array< {
      __typename: "Users",
      id: string,
      email?: string | null,
      name?: string | null,
      phone?: string | null,
      address?: string | null,
      picture?: string | null,
      description?: string | null,
      departmentsID: string,
      role?: string | null,
      AssignmentSubmissions?:  {
        __typename: "ModelAssignmentSubmissionsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UsersByDepartmentsIDQueryVariables = {
  departmentsID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUsersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UsersByDepartmentsIDQuery = {
  usersByDepartmentsID?:  {
    __typename: "ModelUsersConnection",
    items:  Array< {
      __typename: "Users",
      id: string,
      email?: string | null,
      name?: string | null,
      phone?: string | null,
      address?: string | null,
      picture?: string | null,
      description?: string | null,
      departmentsID: string,
      role?: string | null,
      AssignmentSubmissions?:  {
        __typename: "ModelAssignmentSubmissionsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAssignmentSubmissionsQueryVariables = {
  id: string,
};

export type GetAssignmentSubmissionsQuery = {
  getAssignmentSubmissions?:  {
    __typename: "AssignmentSubmissions",
    id: string,
    assignmentsID: string,
    usersID: string,
    number_of_files?: number | null,
    grade?: number | null,
    submission_comment?: string | null,
    checker: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAssignmentSubmissionsQueryVariables = {
  filter?: ModelAssignmentSubmissionsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAssignmentSubmissionsQuery = {
  listAssignmentSubmissions?:  {
    __typename: "ModelAssignmentSubmissionsConnection",
    items:  Array< {
      __typename: "AssignmentSubmissions",
      id: string,
      assignmentsID: string,
      usersID: string,
      number_of_files?: number | null,
      grade?: number | null,
      submission_comment?: string | null,
      checker: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AssignmentSubmissionsByAssignmentsIDQueryVariables = {
  assignmentsID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAssignmentSubmissionsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AssignmentSubmissionsByAssignmentsIDQuery = {
  assignmentSubmissionsByAssignmentsID?:  {
    __typename: "ModelAssignmentSubmissionsConnection",
    items:  Array< {
      __typename: "AssignmentSubmissions",
      id: string,
      assignmentsID: string,
      usersID: string,
      number_of_files?: number | null,
      grade?: number | null,
      submission_comment?: string | null,
      checker: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AssignmentSubmissionsByUsersIDQueryVariables = {
  usersID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAssignmentSubmissionsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AssignmentSubmissionsByUsersIDQuery = {
  assignmentSubmissionsByUsersID?:  {
    __typename: "ModelAssignmentSubmissionsConnection",
    items:  Array< {
      __typename: "AssignmentSubmissions",
      id: string,
      assignmentsID: string,
      usersID: string,
      number_of_files?: number | null,
      grade?: number | null,
      submission_comment?: string | null,
      checker: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAssignmentsQueryVariables = {
  id: string,
};

export type GetAssignmentsQuery = {
  getAssignments?:  {
    __typename: "Assignments",
    id: string,
    assignment_name: string,
    assignment_desc: string,
    resubmit: number,
    teacher: string,
    max_bytes?: number | null,
    time_due?: string | null,
    time_available?: string | null,
    grade: number,
    extra_data?: string | null,
    AssignmentSubmissions?:  {
      __typename: "ModelAssignmentSubmissionsConnection",
      items:  Array< {
        __typename: "AssignmentSubmissions",
        id: string,
        assignmentsID: string,
        usersID: string,
        number_of_files?: number | null,
        grade?: number | null,
        submission_comment?: string | null,
        checker: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    coursesID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAssignmentsQueryVariables = {
  filter?: ModelAssignmentsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAssignmentsQuery = {
  listAssignments?:  {
    __typename: "ModelAssignmentsConnection",
    items:  Array< {
      __typename: "Assignments",
      id: string,
      assignment_name: string,
      assignment_desc: string,
      resubmit: number,
      teacher: string,
      max_bytes?: number | null,
      time_due?: string | null,
      time_available?: string | null,
      grade: number,
      extra_data?: string | null,
      AssignmentSubmissions?:  {
        __typename: "ModelAssignmentSubmissionsConnection",
        nextToken?: string | null,
      } | null,
      coursesID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AssignmentsByCoursesIDQueryVariables = {
  coursesID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAssignmentsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AssignmentsByCoursesIDQuery = {
  assignmentsByCoursesID?:  {
    __typename: "ModelAssignmentsConnection",
    items:  Array< {
      __typename: "Assignments",
      id: string,
      assignment_name: string,
      assignment_desc: string,
      resubmit: number,
      teacher: string,
      max_bytes?: number | null,
      time_due?: string | null,
      time_available?: string | null,
      grade: number,
      extra_data?: string | null,
      AssignmentSubmissions?:  {
        __typename: "ModelAssignmentSubmissionsConnection",
        nextToken?: string | null,
      } | null,
      coursesID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateAnnouncementsSubscriptionVariables = {
  filter?: ModelSubscriptionAnnouncementsFilterInput | null,
};

export type OnCreateAnnouncementsSubscription = {
  onCreateAnnouncements?:  {
    __typename: "Announcements",
    id: string,
    title?: string | null,
    announcement?: string | null,
    coursesID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAnnouncementsSubscriptionVariables = {
  filter?: ModelSubscriptionAnnouncementsFilterInput | null,
};

export type OnUpdateAnnouncementsSubscription = {
  onUpdateAnnouncements?:  {
    __typename: "Announcements",
    id: string,
    title?: string | null,
    announcement?: string | null,
    coursesID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAnnouncementsSubscriptionVariables = {
  filter?: ModelSubscriptionAnnouncementsFilterInput | null,
};

export type OnDeleteAnnouncementsSubscription = {
  onDeleteAnnouncements?:  {
    __typename: "Announcements",
    id: string,
    title?: string | null,
    announcement?: string | null,
    coursesID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCoursesSubscriptionVariables = {
  filter?: ModelSubscriptionCoursesFilterInput | null,
};

export type OnCreateCoursesSubscription = {
  onCreateCourses?:  {
    __typename: "Courses",
    id: string,
    course_name: string,
    course_code: string,
    course_visibility: boolean,
    course_start_date?: string | null,
    course_end_date?: string | null,
    course_description?: string | null,
    course_image?: string | null,
    course_format?: CourseFormat | null,
    course_credit?: number | null,
    Announcements?:  {
      __typename: "ModelAnnouncementsConnection",
      items:  Array< {
        __typename: "Announcements",
        id: string,
        title?: string | null,
        announcement?: string | null,
        coursesID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Assignments?:  {
      __typename: "ModelAnnouncementsConnection",
      items:  Array< {
        __typename: "Announcements",
        id: string,
        title?: string | null,
        announcement?: string | null,
        coursesID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCoursesSubscriptionVariables = {
  filter?: ModelSubscriptionCoursesFilterInput | null,
};

export type OnUpdateCoursesSubscription = {
  onUpdateCourses?:  {
    __typename: "Courses",
    id: string,
    course_name: string,
    course_code: string,
    course_visibility: boolean,
    course_start_date?: string | null,
    course_end_date?: string | null,
    course_description?: string | null,
    course_image?: string | null,
    course_format?: CourseFormat | null,
    course_credit?: number | null,
    Announcements?:  {
      __typename: "ModelAnnouncementsConnection",
      items:  Array< {
        __typename: "Announcements",
        id: string,
        title?: string | null,
        announcement?: string | null,
        coursesID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Assignments?:  {
      __typename: "ModelAnnouncementsConnection",
      items:  Array< {
        __typename: "Announcements",
        id: string,
        title?: string | null,
        announcement?: string | null,
        coursesID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCoursesSubscriptionVariables = {
  filter?: ModelSubscriptionCoursesFilterInput | null,
};

export type OnDeleteCoursesSubscription = {
  onDeleteCourses?:  {
    __typename: "Courses",
    id: string,
    course_name: string,
    course_code: string,
    course_visibility: boolean,
    course_start_date?: string | null,
    course_end_date?: string | null,
    course_description?: string | null,
    course_image?: string | null,
    course_format?: CourseFormat | null,
    course_credit?: number | null,
    Announcements?:  {
      __typename: "ModelAnnouncementsConnection",
      items:  Array< {
        __typename: "Announcements",
        id: string,
        title?: string | null,
        announcement?: string | null,
        coursesID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Assignments?:  {
      __typename: "ModelAnnouncementsConnection",
      items:  Array< {
        __typename: "Announcements",
        id: string,
        title?: string | null,
        announcement?: string | null,
        coursesID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateDepartmentsSubscriptionVariables = {
  filter?: ModelSubscriptionDepartmentsFilterInput | null,
};

export type OnCreateDepartmentsSubscription = {
  onCreateDepartments?:  {
    __typename: "Departments",
    id: string,
    department_name?: string | null,
    department_id?: string | null,
    department_description?: string | null,
    Users?:  {
      __typename: "ModelUsersConnection",
      items:  Array< {
        __typename: "Users",
        id: string,
        email?: string | null,
        name?: string | null,
        phone?: string | null,
        address?: string | null,
        picture?: string | null,
        description?: string | null,
        departmentsID: string,
        role?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateDepartmentsSubscriptionVariables = {
  filter?: ModelSubscriptionDepartmentsFilterInput | null,
};

export type OnUpdateDepartmentsSubscription = {
  onUpdateDepartments?:  {
    __typename: "Departments",
    id: string,
    department_name?: string | null,
    department_id?: string | null,
    department_description?: string | null,
    Users?:  {
      __typename: "ModelUsersConnection",
      items:  Array< {
        __typename: "Users",
        id: string,
        email?: string | null,
        name?: string | null,
        phone?: string | null,
        address?: string | null,
        picture?: string | null,
        description?: string | null,
        departmentsID: string,
        role?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteDepartmentsSubscriptionVariables = {
  filter?: ModelSubscriptionDepartmentsFilterInput | null,
};

export type OnDeleteDepartmentsSubscription = {
  onDeleteDepartments?:  {
    __typename: "Departments",
    id: string,
    department_name?: string | null,
    department_id?: string | null,
    department_description?: string | null,
    Users?:  {
      __typename: "ModelUsersConnection",
      items:  Array< {
        __typename: "Users",
        id: string,
        email?: string | null,
        name?: string | null,
        phone?: string | null,
        address?: string | null,
        picture?: string | null,
        description?: string | null,
        departmentsID: string,
        role?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUsersSubscriptionVariables = {
  filter?: ModelSubscriptionUsersFilterInput | null,
};

export type OnCreateUsersSubscription = {
  onCreateUsers?:  {
    __typename: "Users",
    id: string,
    email?: string | null,
    name?: string | null,
    phone?: string | null,
    address?: string | null,
    picture?: string | null,
    description?: string | null,
    departmentsID: string,
    role?: string | null,
    AssignmentSubmissions?:  {
      __typename: "ModelAssignmentSubmissionsConnection",
      items:  Array< {
        __typename: "AssignmentSubmissions",
        id: string,
        assignmentsID: string,
        usersID: string,
        number_of_files?: number | null,
        grade?: number | null,
        submission_comment?: string | null,
        checker: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUsersSubscriptionVariables = {
  filter?: ModelSubscriptionUsersFilterInput | null,
};

export type OnUpdateUsersSubscription = {
  onUpdateUsers?:  {
    __typename: "Users",
    id: string,
    email?: string | null,
    name?: string | null,
    phone?: string | null,
    address?: string | null,
    picture?: string | null,
    description?: string | null,
    departmentsID: string,
    role?: string | null,
    AssignmentSubmissions?:  {
      __typename: "ModelAssignmentSubmissionsConnection",
      items:  Array< {
        __typename: "AssignmentSubmissions",
        id: string,
        assignmentsID: string,
        usersID: string,
        number_of_files?: number | null,
        grade?: number | null,
        submission_comment?: string | null,
        checker: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUsersSubscriptionVariables = {
  filter?: ModelSubscriptionUsersFilterInput | null,
};

export type OnDeleteUsersSubscription = {
  onDeleteUsers?:  {
    __typename: "Users",
    id: string,
    email?: string | null,
    name?: string | null,
    phone?: string | null,
    address?: string | null,
    picture?: string | null,
    description?: string | null,
    departmentsID: string,
    role?: string | null,
    AssignmentSubmissions?:  {
      __typename: "ModelAssignmentSubmissionsConnection",
      items:  Array< {
        __typename: "AssignmentSubmissions",
        id: string,
        assignmentsID: string,
        usersID: string,
        number_of_files?: number | null,
        grade?: number | null,
        submission_comment?: string | null,
        checker: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAssignmentSubmissionsSubscriptionVariables = {
  filter?: ModelSubscriptionAssignmentSubmissionsFilterInput | null,
};

export type OnCreateAssignmentSubmissionsSubscription = {
  onCreateAssignmentSubmissions?:  {
    __typename: "AssignmentSubmissions",
    id: string,
    assignmentsID: string,
    usersID: string,
    number_of_files?: number | null,
    grade?: number | null,
    submission_comment?: string | null,
    checker: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAssignmentSubmissionsSubscriptionVariables = {
  filter?: ModelSubscriptionAssignmentSubmissionsFilterInput | null,
};

export type OnUpdateAssignmentSubmissionsSubscription = {
  onUpdateAssignmentSubmissions?:  {
    __typename: "AssignmentSubmissions",
    id: string,
    assignmentsID: string,
    usersID: string,
    number_of_files?: number | null,
    grade?: number | null,
    submission_comment?: string | null,
    checker: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAssignmentSubmissionsSubscriptionVariables = {
  filter?: ModelSubscriptionAssignmentSubmissionsFilterInput | null,
};

export type OnDeleteAssignmentSubmissionsSubscription = {
  onDeleteAssignmentSubmissions?:  {
    __typename: "AssignmentSubmissions",
    id: string,
    assignmentsID: string,
    usersID: string,
    number_of_files?: number | null,
    grade?: number | null,
    submission_comment?: string | null,
    checker: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAssignmentsSubscriptionVariables = {
  filter?: ModelSubscriptionAssignmentsFilterInput | null,
};

export type OnCreateAssignmentsSubscription = {
  onCreateAssignments?:  {
    __typename: "Assignments",
    id: string,
    assignment_name: string,
    assignment_desc: string,
    resubmit: number,
    teacher: string,
    max_bytes?: number | null,
    time_due?: string | null,
    time_available?: string | null,
    grade: number,
    extra_data?: string | null,
    AssignmentSubmissions?:  {
      __typename: "ModelAssignmentSubmissionsConnection",
      items:  Array< {
        __typename: "AssignmentSubmissions",
        id: string,
        assignmentsID: string,
        usersID: string,
        number_of_files?: number | null,
        grade?: number | null,
        submission_comment?: string | null,
        checker: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    coursesID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAssignmentsSubscriptionVariables = {
  filter?: ModelSubscriptionAssignmentsFilterInput | null,
};

export type OnUpdateAssignmentsSubscription = {
  onUpdateAssignments?:  {
    __typename: "Assignments",
    id: string,
    assignment_name: string,
    assignment_desc: string,
    resubmit: number,
    teacher: string,
    max_bytes?: number | null,
    time_due?: string | null,
    time_available?: string | null,
    grade: number,
    extra_data?: string | null,
    AssignmentSubmissions?:  {
      __typename: "ModelAssignmentSubmissionsConnection",
      items:  Array< {
        __typename: "AssignmentSubmissions",
        id: string,
        assignmentsID: string,
        usersID: string,
        number_of_files?: number | null,
        grade?: number | null,
        submission_comment?: string | null,
        checker: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    coursesID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAssignmentsSubscriptionVariables = {
  filter?: ModelSubscriptionAssignmentsFilterInput | null,
};

export type OnDeleteAssignmentsSubscription = {
  onDeleteAssignments?:  {
    __typename: "Assignments",
    id: string,
    assignment_name: string,
    assignment_desc: string,
    resubmit: number,
    teacher: string,
    max_bytes?: number | null,
    time_due?: string | null,
    time_available?: string | null,
    grade: number,
    extra_data?: string | null,
    AssignmentSubmissions?:  {
      __typename: "ModelAssignmentSubmissionsConnection",
      items:  Array< {
        __typename: "AssignmentSubmissions",
        id: string,
        assignmentsID: string,
        usersID: string,
        number_of_files?: number | null,
        grade?: number | null,
        submission_comment?: string | null,
        checker: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    coursesID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
