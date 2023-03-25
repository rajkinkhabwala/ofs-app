/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AssignmentsCreateFormInputValues = {
    assignment_name?: string;
    assignment_desc?: string;
    resubmit?: number;
    teacher?: string;
    max_bytes?: number;
    time_due?: string;
    time_available?: string;
    grade?: number;
    extra_data?: string;
    coursesID?: string;
};
export declare type AssignmentsCreateFormValidationValues = {
    assignment_name?: ValidationFunction<string>;
    assignment_desc?: ValidationFunction<string>;
    resubmit?: ValidationFunction<number>;
    teacher?: ValidationFunction<string>;
    max_bytes?: ValidationFunction<number>;
    time_due?: ValidationFunction<string>;
    time_available?: ValidationFunction<string>;
    grade?: ValidationFunction<number>;
    extra_data?: ValidationFunction<string>;
    coursesID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AssignmentsCreateFormOverridesProps = {
    AssignmentsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    assignment_name?: PrimitiveOverrideProps<TextFieldProps>;
    assignment_desc?: PrimitiveOverrideProps<TextFieldProps>;
    resubmit?: PrimitiveOverrideProps<TextFieldProps>;
    teacher?: PrimitiveOverrideProps<TextFieldProps>;
    max_bytes?: PrimitiveOverrideProps<TextFieldProps>;
    time_due?: PrimitiveOverrideProps<TextFieldProps>;
    time_available?: PrimitiveOverrideProps<TextFieldProps>;
    grade?: PrimitiveOverrideProps<TextFieldProps>;
    extra_data?: PrimitiveOverrideProps<TextAreaFieldProps>;
    coursesID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AssignmentsCreateFormProps = React.PropsWithChildren<{
    overrides?: AssignmentsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AssignmentsCreateFormInputValues) => AssignmentsCreateFormInputValues;
    onSuccess?: (fields: AssignmentsCreateFormInputValues) => void;
    onError?: (fields: AssignmentsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AssignmentsCreateFormInputValues) => AssignmentsCreateFormInputValues;
    onValidate?: AssignmentsCreateFormValidationValues;
} & React.CSSProperties>;
export default function AssignmentsCreateForm(props: AssignmentsCreateFormProps): React.ReactElement;
