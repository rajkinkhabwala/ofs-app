import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

export enum CourseFormat {
  WEEKY = "WEEKY"
}



type EagerCourses = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Courses, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly course_name: string;
  readonly course_code: string;
  readonly course_visibility: boolean;
  readonly course_start_date?: string | null;
  readonly course_end_date?: string | null;
  readonly course_description?: string | null;
  readonly course_image?: string | null;
  readonly course_format?: CourseFormat | keyof typeof CourseFormat | null;
  readonly course_credit?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCourses = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Courses, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly course_name: string;
  readonly course_code: string;
  readonly course_visibility: boolean;
  readonly course_start_date?: string | null;
  readonly course_end_date?: string | null;
  readonly course_description?: string | null;
  readonly course_image?: string | null;
  readonly course_format?: CourseFormat | keyof typeof CourseFormat | null;
  readonly course_credit?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Courses = LazyLoading extends LazyLoadingDisabled ? EagerCourses : LazyCourses

export declare const Courses: (new (init: ModelInit<Courses>) => Courses) & {
  copyOf(source: Courses, mutator: (draft: MutableModel<Courses>) => MutableModel<Courses> | void): Courses;
}