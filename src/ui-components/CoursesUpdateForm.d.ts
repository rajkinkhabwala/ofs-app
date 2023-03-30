/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Courses } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CoursesUpdateFormInputValues = {
    course_name?: string;
    course_code?: string;
    course_visibility?: boolean;
    course_start_date?: string;
    course_end_date?: string;
    course_description?: string;
    course_image?: string;
    course_format?: string;
    course_credit?: number;
};
export declare type CoursesUpdateFormValidationValues = {
    course_name?: ValidationFunction<string>;
    course_code?: ValidationFunction<string>;
    course_visibility?: ValidationFunction<boolean>;
    course_start_date?: ValidationFunction<string>;
    course_end_date?: ValidationFunction<string>;
    course_description?: ValidationFunction<string>;
    course_image?: ValidationFunction<string>;
    course_format?: ValidationFunction<string>;
    course_credit?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CoursesUpdateFormOverridesProps = {
    CoursesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    course_name?: PrimitiveOverrideProps<TextFieldProps>;
    course_code?: PrimitiveOverrideProps<TextFieldProps>;
    course_visibility?: PrimitiveOverrideProps<SwitchFieldProps>;
    course_start_date?: PrimitiveOverrideProps<TextFieldProps>;
    course_end_date?: PrimitiveOverrideProps<TextFieldProps>;
    course_description?: PrimitiveOverrideProps<TextAreaFieldProps>;
    course_image?: PrimitiveOverrideProps<TextFieldProps>;
    course_format?: PrimitiveOverrideProps<SelectFieldProps>;
    course_credit?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CoursesUpdateFormProps = React.PropsWithChildren<{
    overrides?: CoursesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    courses?: Courses;
    onSubmit?: (fields: CoursesUpdateFormInputValues) => CoursesUpdateFormInputValues;
    onSuccess?: (fields: CoursesUpdateFormInputValues) => void;
    onError?: (fields: CoursesUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CoursesUpdateFormInputValues) => CoursesUpdateFormInputValues;
    onValidate?: CoursesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CoursesUpdateForm(props: CoursesUpdateFormProps): React.ReactElement;
