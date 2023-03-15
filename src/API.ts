/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

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
  createdAt: string,
  updatedAt: string,
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

export type ModelCoursesConnection = {
  __typename: "ModelCoursesConnection",
  items:  Array<Courses | null >,
  nextToken?: string | null,
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
    createdAt: string,
    updatedAt: string,
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
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
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
    createdAt: string,
    updatedAt: string,
  } | null,
};
