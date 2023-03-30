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
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Assignments } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function AssignmentsUpdateForm(props) {
  const {
    id: idProp,
    assignments,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    assignment_name: "",
    assignment_desc: "",
    resubmit: "",
    teacher: "",
    max_bytes: "",
    time_due: "",
    time_available: "",
    grade: "",
    extra_data: "",
    coursesID: "",
  };
  const [assignment_name, setAssignment_name] = React.useState(
    initialValues.assignment_name
  );
  const [assignment_desc, setAssignment_desc] = React.useState(
    initialValues.assignment_desc
  );
  const [resubmit, setResubmit] = React.useState(initialValues.resubmit);
  const [teacher, setTeacher] = React.useState(initialValues.teacher);
  const [max_bytes, setMax_bytes] = React.useState(initialValues.max_bytes);
  const [time_due, setTime_due] = React.useState(initialValues.time_due);
  const [time_available, setTime_available] = React.useState(
    initialValues.time_available
  );
  const [grade, setGrade] = React.useState(initialValues.grade);
  const [extra_data, setExtra_data] = React.useState(initialValues.extra_data);
  const [coursesID, setCoursesID] = React.useState(initialValues.coursesID);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = assignmentsRecord
      ? { ...initialValues, ...assignmentsRecord }
      : initialValues;
    setAssignment_name(cleanValues.assignment_name);
    setAssignment_desc(cleanValues.assignment_desc);
    setResubmit(cleanValues.resubmit);
    setTeacher(cleanValues.teacher);
    setMax_bytes(cleanValues.max_bytes);
    setTime_due(cleanValues.time_due);
    setTime_available(cleanValues.time_available);
    setGrade(cleanValues.grade);
    setExtra_data(
      typeof cleanValues.extra_data === "string"
        ? cleanValues.extra_data
        : JSON.stringify(cleanValues.extra_data)
    );
    setCoursesID(cleanValues.coursesID);
    setErrors({});
  };
  const [assignmentsRecord, setAssignmentsRecord] = React.useState(assignments);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Assignments, idProp)
        : assignments;
      setAssignmentsRecord(record);
    };
    queryData();
  }, [idProp, assignments]);
  React.useEffect(resetStateValues, [assignmentsRecord]);
  const validations = {
    assignment_name: [{ type: "Required" }],
    assignment_desc: [{ type: "Required" }],
    resubmit: [{ type: "Required" }],
    teacher: [{ type: "Required" }],
    max_bytes: [],
    time_due: [],
    time_available: [],
    grade: [{ type: "Required" }],
    extra_data: [{ type: "JSON" }],
    coursesID: [{ type: "Required" }],
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
          assignment_name,
          assignment_desc,
          resubmit,
          teacher,
          max_bytes,
          time_due,
          time_available,
          grade,
          extra_data,
          coursesID,
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
            Assignments.copyOf(assignmentsRecord, (updated) => {
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
      {...getOverrideProps(overrides, "AssignmentsUpdateForm")}
      {...rest}
    >
      <TextField
        label="Assignment name"
        isRequired={true}
        isReadOnly={false}
        value={assignment_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              assignment_name: value,
              assignment_desc,
              resubmit,
              teacher,
              max_bytes,
              time_due,
              time_available,
              grade,
              extra_data,
              coursesID,
            };
            const result = onChange(modelFields);
            value = result?.assignment_name ?? value;
          }
          if (errors.assignment_name?.hasError) {
            runValidationTasks("assignment_name", value);
          }
          setAssignment_name(value);
        }}
        onBlur={() => runValidationTasks("assignment_name", assignment_name)}
        errorMessage={errors.assignment_name?.errorMessage}
        hasError={errors.assignment_name?.hasError}
        {...getOverrideProps(overrides, "assignment_name")}
      ></TextField>
      <TextField
        label="Assignment desc"
        isRequired={true}
        isReadOnly={false}
        value={assignment_desc}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              assignment_name,
              assignment_desc: value,
              resubmit,
              teacher,
              max_bytes,
              time_due,
              time_available,
              grade,
              extra_data,
              coursesID,
            };
            const result = onChange(modelFields);
            value = result?.assignment_desc ?? value;
          }
          if (errors.assignment_desc?.hasError) {
            runValidationTasks("assignment_desc", value);
          }
          setAssignment_desc(value);
        }}
        onBlur={() => runValidationTasks("assignment_desc", assignment_desc)}
        errorMessage={errors.assignment_desc?.errorMessage}
        hasError={errors.assignment_desc?.hasError}
        {...getOverrideProps(overrides, "assignment_desc")}
      ></TextField>
      <TextField
        label="Resubmit"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={resubmit}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              assignment_name,
              assignment_desc,
              resubmit: value,
              teacher,
              max_bytes,
              time_due,
              time_available,
              grade,
              extra_data,
              coursesID,
            };
            const result = onChange(modelFields);
            value = result?.resubmit ?? value;
          }
          if (errors.resubmit?.hasError) {
            runValidationTasks("resubmit", value);
          }
          setResubmit(value);
        }}
        onBlur={() => runValidationTasks("resubmit", resubmit)}
        errorMessage={errors.resubmit?.errorMessage}
        hasError={errors.resubmit?.hasError}
        {...getOverrideProps(overrides, "resubmit")}
      ></TextField>
      <TextField
        label="Teacher"
        isRequired={true}
        isReadOnly={false}
        value={teacher}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              assignment_name,
              assignment_desc,
              resubmit,
              teacher: value,
              max_bytes,
              time_due,
              time_available,
              grade,
              extra_data,
              coursesID,
            };
            const result = onChange(modelFields);
            value = result?.teacher ?? value;
          }
          if (errors.teacher?.hasError) {
            runValidationTasks("teacher", value);
          }
          setTeacher(value);
        }}
        onBlur={() => runValidationTasks("teacher", teacher)}
        errorMessage={errors.teacher?.errorMessage}
        hasError={errors.teacher?.hasError}
        {...getOverrideProps(overrides, "teacher")}
      ></TextField>
      <TextField
        label="Max bytes"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={max_bytes}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              assignment_name,
              assignment_desc,
              resubmit,
              teacher,
              max_bytes: value,
              time_due,
              time_available,
              grade,
              extra_data,
              coursesID,
            };
            const result = onChange(modelFields);
            value = result?.max_bytes ?? value;
          }
          if (errors.max_bytes?.hasError) {
            runValidationTasks("max_bytes", value);
          }
          setMax_bytes(value);
        }}
        onBlur={() => runValidationTasks("max_bytes", max_bytes)}
        errorMessage={errors.max_bytes?.errorMessage}
        hasError={errors.max_bytes?.hasError}
        {...getOverrideProps(overrides, "max_bytes")}
      ></TextField>
      <TextField
        label="Time due"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={time_due && convertToLocal(new Date(time_due))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              assignment_name,
              assignment_desc,
              resubmit,
              teacher,
              max_bytes,
              time_due: value,
              time_available,
              grade,
              extra_data,
              coursesID,
            };
            const result = onChange(modelFields);
            value = result?.time_due ?? value;
          }
          if (errors.time_due?.hasError) {
            runValidationTasks("time_due", value);
          }
          setTime_due(value);
        }}
        onBlur={() => runValidationTasks("time_due", time_due)}
        errorMessage={errors.time_due?.errorMessage}
        hasError={errors.time_due?.hasError}
        {...getOverrideProps(overrides, "time_due")}
      ></TextField>
      <TextField
        label="Time available"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={time_available && convertToLocal(new Date(time_available))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              assignment_name,
              assignment_desc,
              resubmit,
              teacher,
              max_bytes,
              time_due,
              time_available: value,
              grade,
              extra_data,
              coursesID,
            };
            const result = onChange(modelFields);
            value = result?.time_available ?? value;
          }
          if (errors.time_available?.hasError) {
            runValidationTasks("time_available", value);
          }
          setTime_available(value);
        }}
        onBlur={() => runValidationTasks("time_available", time_available)}
        errorMessage={errors.time_available?.errorMessage}
        hasError={errors.time_available?.hasError}
        {...getOverrideProps(overrides, "time_available")}
      ></TextField>
      <TextField
        label="Grade"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={grade}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              assignment_name,
              assignment_desc,
              resubmit,
              teacher,
              max_bytes,
              time_due,
              time_available,
              grade: value,
              extra_data,
              coursesID,
            };
            const result = onChange(modelFields);
            value = result?.grade ?? value;
          }
          if (errors.grade?.hasError) {
            runValidationTasks("grade", value);
          }
          setGrade(value);
        }}
        onBlur={() => runValidationTasks("grade", grade)}
        errorMessage={errors.grade?.errorMessage}
        hasError={errors.grade?.hasError}
        {...getOverrideProps(overrides, "grade")}
      ></TextField>
      <TextAreaField
        label="Extra data"
        isRequired={false}
        isReadOnly={false}
        value={extra_data}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              assignment_name,
              assignment_desc,
              resubmit,
              teacher,
              max_bytes,
              time_due,
              time_available,
              grade,
              extra_data: value,
              coursesID,
            };
            const result = onChange(modelFields);
            value = result?.extra_data ?? value;
          }
          if (errors.extra_data?.hasError) {
            runValidationTasks("extra_data", value);
          }
          setExtra_data(value);
        }}
        onBlur={() => runValidationTasks("extra_data", extra_data)}
        errorMessage={errors.extra_data?.errorMessage}
        hasError={errors.extra_data?.hasError}
        {...getOverrideProps(overrides, "extra_data")}
      ></TextAreaField>
      <TextField
        label="Courses id"
        isRequired={true}
        isReadOnly={false}
        value={coursesID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              assignment_name,
              assignment_desc,
              resubmit,
              teacher,
              max_bytes,
              time_due,
              time_available,
              grade,
              extra_data,
              coursesID: value,
            };
            const result = onChange(modelFields);
            value = result?.coursesID ?? value;
          }
          if (errors.coursesID?.hasError) {
            runValidationTasks("coursesID", value);
          }
          setCoursesID(value);
        }}
        onBlur={() => runValidationTasks("coursesID", coursesID)}
        errorMessage={errors.coursesID?.errorMessage}
        hasError={errors.coursesID?.hasError}
        {...getOverrideProps(overrides, "coursesID")}
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
          isDisabled={!(idProp || assignments)}
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
              !(idProp || assignments) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
