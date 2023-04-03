/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Announcements } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AnnouncementsUpdateFormInputValues = {
    title?: string;
    announcement?: string;
    coursesID?: string;
};
export declare type AnnouncementsUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    announcement?: ValidationFunction<string>;
    coursesID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AnnouncementsUpdateFormOverridesProps = {
    AnnouncementsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    announcement?: PrimitiveOverrideProps<TextFieldProps>;
    coursesID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AnnouncementsUpdateFormProps = React.PropsWithChildren<{
    overrides?: AnnouncementsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    announcements?: Announcements;
    onSubmit?: (fields: AnnouncementsUpdateFormInputValues) => AnnouncementsUpdateFormInputValues;
    onSuccess?: (fields: AnnouncementsUpdateFormInputValues) => void;
    onError?: (fields: AnnouncementsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AnnouncementsUpdateFormInputValues) => AnnouncementsUpdateFormInputValues;
    onValidate?: AnnouncementsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AnnouncementsUpdateForm(props: AnnouncementsUpdateFormProps): React.ReactElement;
