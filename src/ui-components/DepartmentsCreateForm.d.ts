/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DepartmentsCreateFormInputValues = {
    department_name?: string;
    department_id?: string;
    department_description?: string;
};
export declare type DepartmentsCreateFormValidationValues = {
    department_name?: ValidationFunction<string>;
    department_id?: ValidationFunction<string>;
    department_description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DepartmentsCreateFormOverridesProps = {
    DepartmentsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    department_name?: PrimitiveOverrideProps<TextFieldProps>;
    department_id?: PrimitiveOverrideProps<TextFieldProps>;
    department_description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DepartmentsCreateFormProps = React.PropsWithChildren<{
    overrides?: DepartmentsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DepartmentsCreateFormInputValues) => DepartmentsCreateFormInputValues;
    onSuccess?: (fields: DepartmentsCreateFormInputValues) => void;
    onError?: (fields: DepartmentsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DepartmentsCreateFormInputValues) => DepartmentsCreateFormInputValues;
    onValidate?: DepartmentsCreateFormValidationValues;
} & React.CSSProperties>;
export default function DepartmentsCreateForm(props: DepartmentsCreateFormProps): React.ReactElement;
