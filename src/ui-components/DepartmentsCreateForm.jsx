/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Departments } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function DepartmentsCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    deparment_name: "",
    department_id: "",
    department_description: "",
  };
  const [deparment_name, setDeparment_name] = React.useState(
    initialValues.deparment_name
  );
  const [department_id, setDepartment_id] = React.useState(
    initialValues.department_id
  );
  const [department_description, setDepartment_description] = React.useState(
    initialValues.department_description
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setDeparment_name(initialValues.deparment_name);
    setDepartment_id(initialValues.department_id);
    setDepartment_description(initialValues.department_description);
    setErrors({});
  };
  const validations = {
    deparment_name: [],
    department_id: [],
    department_description: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          deparment_name,
          department_id,
          department_description,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Departments(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "DepartmentsCreateForm")}
      {...rest}
    >
      <TextField
        label="Deparment name"
        isRequired={false}
        isReadOnly={false}
        value={deparment_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              deparment_name: value,
              department_id,
              department_description,
            };
            const result = onChange(modelFields);
            value = result?.deparment_name ?? value;
          }
          if (errors.deparment_name?.hasError) {
            runValidationTasks("deparment_name", value);
          }
          setDeparment_name(value);
        }}
        onBlur={() => runValidationTasks("deparment_name", deparment_name)}
        errorMessage={errors.deparment_name?.errorMessage}
        hasError={errors.deparment_name?.hasError}
        {...getOverrideProps(overrides, "deparment_name")}
      ></TextField>
      <TextField
        label="Department id"
        isRequired={false}
        isReadOnly={false}
        value={department_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              deparment_name,
              department_id: value,
              department_description,
            };
            const result = onChange(modelFields);
            value = result?.department_id ?? value;
          }
          if (errors.department_id?.hasError) {
            runValidationTasks("department_id", value);
          }
          setDepartment_id(value);
        }}
        onBlur={() => runValidationTasks("department_id", department_id)}
        errorMessage={errors.department_id?.errorMessage}
        hasError={errors.department_id?.hasError}
        {...getOverrideProps(overrides, "department_id")}
      ></TextField>
      <TextField
        label="Department description"
        isRequired={false}
        isReadOnly={false}
        value={department_description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              deparment_name,
              department_id,
              department_description: value,
            };
            const result = onChange(modelFields);
            value = result?.department_description ?? value;
          }
          if (errors.department_description?.hasError) {
            runValidationTasks("department_description", value);
          }
          setDepartment_description(value);
        }}
        onBlur={() =>
          runValidationTasks("department_description", department_description)
        }
        errorMessage={errors.department_description?.errorMessage}
        hasError={errors.department_description?.hasError}
        {...getOverrideProps(overrides, "department_description")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
