/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Assignments } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AssignmentsUpdateFormInputValues = {
    assignment_name?: string;
    assignment_desc?: string;
    resubmit?: number;
    teacher?: string;
    max_bytes?: number;
    time_due?: string;
    time_available?: string;
    grade?: number;
    extra_data?: string;
};
export declare type AssignmentsUpdateFormValidationValues = {
    assignment_name?: ValidationFunction<string>;
    assignment_desc?: ValidationFunction<string>;
    resubmit?: ValidationFunction<number>;
    teacher?: ValidationFunction<string>;
    max_bytes?: ValidationFunction<number>;
    time_due?: ValidationFunction<string>;
    time_available?: ValidationFunction<string>;
    grade?: ValidationFunction<number>;
    extra_data?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AssignmentsUpdateFormOverridesProps = {
    AssignmentsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    assignment_name?: PrimitiveOverrideProps<TextFieldProps>;
    assignment_desc?: PrimitiveOverrideProps<TextFieldProps>;
    resubmit?: PrimitiveOverrideProps<TextFieldProps>;
    teacher?: PrimitiveOverrideProps<TextFieldProps>;
    max_bytes?: PrimitiveOverrideProps<TextFieldProps>;
    time_due?: PrimitiveOverrideProps<TextFieldProps>;
    time_available?: PrimitiveOverrideProps<TextFieldProps>;
    grade?: PrimitiveOverrideProps<TextFieldProps>;
    extra_data?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type AssignmentsUpdateFormProps = React.PropsWithChildren<{
    overrides?: AssignmentsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    assignments?: Assignments;
    onSubmit?: (fields: AssignmentsUpdateFormInputValues) => AssignmentsUpdateFormInputValues;
    onSuccess?: (fields: AssignmentsUpdateFormInputValues) => void;
    onError?: (fields: AssignmentsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AssignmentsUpdateFormInputValues) => AssignmentsUpdateFormInputValues;
    onValidate?: AssignmentsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AssignmentsUpdateForm(props: AssignmentsUpdateFormProps): React.ReactElement;
