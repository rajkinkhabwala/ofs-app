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
export declare type AnnouncementsCreateFormInputValues = {
    title?: string;
    announcement?: string;
    coursesID?: string;
};
export declare type AnnouncementsCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    announcement?: ValidationFunction<string>;
    coursesID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AnnouncementsCreateFormOverridesProps = {
    AnnouncementsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    announcement?: PrimitiveOverrideProps<TextFieldProps>;
    coursesID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AnnouncementsCreateFormProps = React.PropsWithChildren<{
    overrides?: AnnouncementsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AnnouncementsCreateFormInputValues) => AnnouncementsCreateFormInputValues;
    onSuccess?: (fields: AnnouncementsCreateFormInputValues) => void;
    onError?: (fields: AnnouncementsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AnnouncementsCreateFormInputValues) => AnnouncementsCreateFormInputValues;
    onValidate?: AnnouncementsCreateFormValidationValues;
} & React.CSSProperties>;
export default function AnnouncementsCreateForm(props: AnnouncementsCreateFormProps): React.ReactElement;
