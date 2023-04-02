/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Users } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function UsersCreateForm(props) {
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
    email: "",
    name: "",
    phone: "",
    address: "",
    picture: "",
    description: "",
    department: "",
    role: "",
  };
  const [email, setEmail] = React.useState(initialValues.email);
  const [name, setName] = React.useState(initialValues.name);
  const [phone, setPhone] = React.useState(initialValues.phone);
  const [address, setAddress] = React.useState(initialValues.address);
  const [picture, setPicture] = React.useState(initialValues.picture);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [department, setDepartment] = React.useState(initialValues.department);
  const [role, setRole] = React.useState(initialValues.role);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setEmail(initialValues.email);
    setName(initialValues.name);
    setPhone(initialValues.phone);
    setAddress(initialValues.address);
    setPicture(initialValues.picture);
    setDescription(initialValues.description);
    setDepartment(initialValues.department);
    setRole(initialValues.role);
    setErrors({});
  };
  const validations = {
    email: [],
    name: [],
    phone: [],
    address: [],
    picture: [],
    description: [],
    department: [],
    role: [],
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
          email,
          name,
          phone,
          address,
          picture,
          description,
          department,
          role,
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
          await DataStore.save(new Users(modelFields));
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
      {...getOverrideProps(overrides, "UsersCreateForm")}
      {...rest}
    >
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email: value,
              name,
              phone,
              address,
              picture,
              description,
              department,
              role,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              name: value,
              phone,
              address,
              picture,
              description,
              department,
              role,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Phone"
        isRequired={false}
        isReadOnly={false}
        value={phone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              name,
              phone: value,
              address,
              picture,
              description,
              department,
              role,
            };
            const result = onChange(modelFields);
            value = result?.phone ?? value;
          }
          if (errors.phone?.hasError) {
            runValidationTasks("phone", value);
          }
          setPhone(value);
        }}
        onBlur={() => runValidationTasks("phone", phone)}
        errorMessage={errors.phone?.errorMessage}
        hasError={errors.phone?.hasError}
        {...getOverrideProps(overrides, "phone")}
      ></TextField>
      <TextField
        label="Address"
        isRequired={false}
        isReadOnly={false}
        value={address}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              name,
              phone,
              address: value,
              picture,
              description,
              department,
              role,
            };
            const result = onChange(modelFields);
            value = result?.address ?? value;
          }
          if (errors.address?.hasError) {
            runValidationTasks("address", value);
          }
          setAddress(value);
        }}
        onBlur={() => runValidationTasks("address", address)}
        errorMessage={errors.address?.errorMessage}
        hasError={errors.address?.hasError}
        {...getOverrideProps(overrides, "address")}
      ></TextField>
      <TextField
        label="Picture"
        isRequired={false}
        isReadOnly={false}
        value={picture}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              name,
              phone,
              address,
              picture: value,
              description,
              department,
              role,
            };
            const result = onChange(modelFields);
            value = result?.picture ?? value;
          }
          if (errors.picture?.hasError) {
            runValidationTasks("picture", value);
          }
          setPicture(value);
        }}
        onBlur={() => runValidationTasks("picture", picture)}
        errorMessage={errors.picture?.errorMessage}
        hasError={errors.picture?.hasError}
        {...getOverrideProps(overrides, "picture")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              name,
              phone,
              address,
              picture,
              description: value,
              department,
              role,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Department"
        isRequired={false}
        isReadOnly={false}
        value={department}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              name,
              phone,
              address,
              picture,
              description,
              department: value,
              role,
            };
            const result = onChange(modelFields);
            value = result?.department ?? value;
          }
          if (errors.department?.hasError) {
            runValidationTasks("department", value);
          }
          setDepartment(value);
        }}
        onBlur={() => runValidationTasks("department", department)}
        errorMessage={errors.department?.errorMessage}
        hasError={errors.department?.hasError}
        {...getOverrideProps(overrides, "department")}
      ></TextField>
      <TextField
        label="Role"
        isRequired={false}
        isReadOnly={false}
        value={role}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              name,
              phone,
              address,
              picture,
              description,
              department,
              role: value,
            };
            const result = onChange(modelFields);
            value = result?.role ?? value;
          }
          if (errors.role?.hasError) {
            runValidationTasks("role", value);
          }
          setRole(value);
        }}
        onBlur={() => runValidationTasks("role", role)}
        errorMessage={errors.role?.errorMessage}
        hasError={errors.role?.hasError}
        {...getOverrideProps(overrides, "role")}
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
