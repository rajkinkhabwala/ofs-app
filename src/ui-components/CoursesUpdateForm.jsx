/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Courses } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function CoursesUpdateForm(props) {
  const {
    id: idProp,
    courses,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    course_name: "",
    course_code: "",
    course_visibility: false,
    course_start_date: "",
    course_end_date: "",
    course_description: "",
    course_image: "",
    course_format: undefined,
    course_credit: "",
  };
  const [course_name, setCourse_name] = React.useState(
    initialValues.course_name
  );
  const [course_code, setCourse_code] = React.useState(
    initialValues.course_code
  );
  const [course_visibility, setCourse_visibility] = React.useState(
    initialValues.course_visibility
  );
  const [course_start_date, setCourse_start_date] = React.useState(
    initialValues.course_start_date
  );
  const [course_end_date, setCourse_end_date] = React.useState(
    initialValues.course_end_date
  );
  const [course_description, setCourse_description] = React.useState(
    initialValues.course_description
  );
  const [course_image, setCourse_image] = React.useState(
    initialValues.course_image
  );
  const [course_format, setCourse_format] = React.useState(
    initialValues.course_format
  );
  const [course_credit, setCourse_credit] = React.useState(
    initialValues.course_credit
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = coursesRecord
      ? { ...initialValues, ...coursesRecord }
      : initialValues;
    setCourse_name(cleanValues.course_name);
    setCourse_code(cleanValues.course_code);
    setCourse_visibility(cleanValues.course_visibility);
    setCourse_start_date(cleanValues.course_start_date);
    setCourse_end_date(cleanValues.course_end_date);
    setCourse_description(cleanValues.course_description);
    setCourse_image(cleanValues.course_image);
    setCourse_format(cleanValues.course_format);
    setCourse_credit(cleanValues.course_credit);
    setErrors({});
  };
  const [coursesRecord, setCoursesRecord] = React.useState(courses);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp ? await DataStore.query(Courses, idProp) : courses;
      setCoursesRecord(record);
    };
    queryData();
  }, [idProp, courses]);
  React.useEffect(resetStateValues, [coursesRecord]);
  const validations = {
    course_name: [{ type: "Required" }],
    course_code: [{ type: "Required" }],
    course_visibility: [{ type: "Required" }],
    course_start_date: [],
    course_end_date: [],
    course_description: [],
    course_image: [],
    course_format: [],
    course_credit: [],
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
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
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
          course_name,
          course_code,
          course_visibility,
          course_start_date,
          course_end_date,
          course_description,
          course_image,
          course_format,
          course_credit,
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
          await DataStore.save(
            Courses.copyOf(coursesRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "CoursesUpdateForm")}
      {...rest}
    >
      <TextField
        label="Course name"
        isRequired={true}
        isReadOnly={false}
        value={course_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              course_name: value,
              course_code,
              course_visibility,
              course_start_date,
              course_end_date,
              course_description,
              course_image,
              course_format,
              course_credit,
            };
            const result = onChange(modelFields);
            value = result?.course_name ?? value;
          }
          if (errors.course_name?.hasError) {
            runValidationTasks("course_name", value);
          }
          setCourse_name(value);
        }}
        onBlur={() => runValidationTasks("course_name", course_name)}
        errorMessage={errors.course_name?.errorMessage}
        hasError={errors.course_name?.hasError}
        {...getOverrideProps(overrides, "course_name")}
      ></TextField>
      <TextField
        label="Course code"
        isRequired={true}
        isReadOnly={false}
        value={course_code}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              course_name,
              course_code: value,
              course_visibility,
              course_start_date,
              course_end_date,
              course_description,
              course_image,
              course_format,
              course_credit,
            };
            const result = onChange(modelFields);
            value = result?.course_code ?? value;
          }
          if (errors.course_code?.hasError) {
            runValidationTasks("course_code", value);
          }
          setCourse_code(value);
        }}
        onBlur={() => runValidationTasks("course_code", course_code)}
        errorMessage={errors.course_code?.errorMessage}
        hasError={errors.course_code?.hasError}
        {...getOverrideProps(overrides, "course_code")}
      ></TextField>
      <SwitchField
        label="Course visibility"
        defaultChecked={false}
        isDisabled={false}
        isChecked={course_visibility}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              course_name,
              course_code,
              course_visibility: value,
              course_start_date,
              course_end_date,
              course_description,
              course_image,
              course_format,
              course_credit,
            };
            const result = onChange(modelFields);
            value = result?.course_visibility ?? value;
          }
          if (errors.course_visibility?.hasError) {
            runValidationTasks("course_visibility", value);
          }
          setCourse_visibility(value);
        }}
        onBlur={() =>
          runValidationTasks("course_visibility", course_visibility)
        }
        errorMessage={errors.course_visibility?.errorMessage}
        hasError={errors.course_visibility?.hasError}
        {...getOverrideProps(overrides, "course_visibility")}
      ></SwitchField>
      <TextField
        label="Course start date"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={course_start_date && convertToLocal(new Date(course_start_date))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              course_name,
              course_code,
              course_visibility,
              course_start_date: value,
              course_end_date,
              course_description,
              course_image,
              course_format,
              course_credit,
            };
            const result = onChange(modelFields);
            value = result?.course_start_date ?? value;
          }
          if (errors.course_start_date?.hasError) {
            runValidationTasks("course_start_date", value);
          }
          setCourse_start_date(value);
        }}
        onBlur={() =>
          runValidationTasks("course_start_date", course_start_date)
        }
        errorMessage={errors.course_start_date?.errorMessage}
        hasError={errors.course_start_date?.hasError}
        {...getOverrideProps(overrides, "course_start_date")}
      ></TextField>
      <TextField
        label="Course end date"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={course_end_date && convertToLocal(new Date(course_end_date))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              course_name,
              course_code,
              course_visibility,
              course_start_date,
              course_end_date: value,
              course_description,
              course_image,
              course_format,
              course_credit,
            };
            const result = onChange(modelFields);
            value = result?.course_end_date ?? value;
          }
          if (errors.course_end_date?.hasError) {
            runValidationTasks("course_end_date", value);
          }
          setCourse_end_date(value);
        }}
        onBlur={() => runValidationTasks("course_end_date", course_end_date)}
        errorMessage={errors.course_end_date?.errorMessage}
        hasError={errors.course_end_date?.hasError}
        {...getOverrideProps(overrides, "course_end_date")}
      ></TextField>
      <TextField
        label="Course description"
        isRequired={false}
        isReadOnly={false}
        value={course_description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              course_name,
              course_code,
              course_visibility,
              course_start_date,
              course_end_date,
              course_description: value,
              course_image,
              course_format,
              course_credit,
            };
            const result = onChange(modelFields);
            value = result?.course_description ?? value;
          }
          if (errors.course_description?.hasError) {
            runValidationTasks("course_description", value);
          }
          setCourse_description(value);
        }}
        onBlur={() =>
          runValidationTasks("course_description", course_description)
        }
        errorMessage={errors.course_description?.errorMessage}
        hasError={errors.course_description?.hasError}
        {...getOverrideProps(overrides, "course_description")}
      ></TextField>
      <TextField
        label="Course image"
        isRequired={false}
        isReadOnly={false}
        value={course_image}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              course_name,
              course_code,
              course_visibility,
              course_start_date,
              course_end_date,
              course_description,
              course_image: value,
              course_format,
              course_credit,
            };
            const result = onChange(modelFields);
            value = result?.course_image ?? value;
          }
          if (errors.course_image?.hasError) {
            runValidationTasks("course_image", value);
          }
          setCourse_image(value);
        }}
        onBlur={() => runValidationTasks("course_image", course_image)}
        errorMessage={errors.course_image?.errorMessage}
        hasError={errors.course_image?.hasError}
        {...getOverrideProps(overrides, "course_image")}
      ></TextField>
      <SelectField
        label="Course format"
        placeholder="Please select an option"
        isDisabled={false}
        value={course_format}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              course_name,
              course_code,
              course_visibility,
              course_start_date,
              course_end_date,
              course_description,
              course_image,
              course_format: value,
              course_credit,
            };
            const result = onChange(modelFields);
            value = result?.course_format ?? value;
          }
          if (errors.course_format?.hasError) {
            runValidationTasks("course_format", value);
          }
          setCourse_format(value);
        }}
        onBlur={() => runValidationTasks("course_format", course_format)}
        errorMessage={errors.course_format?.errorMessage}
        hasError={errors.course_format?.hasError}
        {...getOverrideProps(overrides, "course_format")}
      >
        <option
          children="Weeky"
          value="WEEKY"
          {...getOverrideProps(overrides, "course_formatoption0")}
        ></option>
      </SelectField>
      <TextField
        label="Course credit"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={course_credit}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              course_name,
              course_code,
              course_visibility,
              course_start_date,
              course_end_date,
              course_description,
              course_image,
              course_format,
              course_credit: value,
            };
            const result = onChange(modelFields);
            value = result?.course_credit ?? value;
          }
          if (errors.course_credit?.hasError) {
            runValidationTasks("course_credit", value);
          }
          setCourse_credit(value);
        }}
        onBlur={() => runValidationTasks("course_credit", course_credit)}
        errorMessage={errors.course_credit?.errorMessage}
        hasError={errors.course_credit?.hasError}
        {...getOverrideProps(overrides, "course_credit")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || courses)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || courses) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
