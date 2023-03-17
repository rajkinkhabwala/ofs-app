/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Departments } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DepartmentsUpdateFormInputValues = {
    deparment_name?: string;
    department_id?: string;
    department_description?: string;
};
export declare type DepartmentsUpdateFormValidationValues = {
    deparment_name?: ValidationFunction<string>;
    department_id?: ValidationFunction<string>;
    department_description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DepartmentsUpdateFormOverridesProps = {
    DepartmentsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    deparment_name?: PrimitiveOverrideProps<TextFieldProps>;
    department_id?: PrimitiveOverrideProps<TextFieldProps>;
    department_description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DepartmentsUpdateFormProps = React.PropsWithChildren<{
    overrides?: DepartmentsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    departments?: Departments;
    onSubmit?: (fields: DepartmentsUpdateFormInputValues) => DepartmentsUpdateFormInputValues;
    onSuccess?: (fields: DepartmentsUpdateFormInputValues) => void;
    onError?: (fields: DepartmentsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DepartmentsUpdateFormInputValues) => DepartmentsUpdateFormInputValues;
    onValidate?: DepartmentsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DepartmentsUpdateForm(props: DepartmentsUpdateFormProps): React.ReactElement;
