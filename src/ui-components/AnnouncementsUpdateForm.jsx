/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Announcements } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function AnnouncementsUpdateForm(props) {
  const {
    id: idProp,
    announcements: announcementsModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    title: "",
    announcement: "",
    coursesID: "",
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [announcement, setAnnouncement] = React.useState(
    initialValues.announcement
  );
  const [coursesID, setCoursesID] = React.useState(initialValues.coursesID);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = announcementsRecord
      ? { ...initialValues, ...announcementsRecord }
      : initialValues;
    setTitle(cleanValues.title);
    setAnnouncement(cleanValues.announcement);
    setCoursesID(cleanValues.coursesID);
    setErrors({});
  };
  const [announcementsRecord, setAnnouncementsRecord] = React.useState(
    announcementsModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Announcements, idProp)
        : announcementsModelProp;
      setAnnouncementsRecord(record);
    };
    queryData();
  }, [idProp, announcementsModelProp]);
  React.useEffect(resetStateValues, [announcementsRecord]);
  const validations = {
    title: [],
    announcement: [],
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
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          title,
          announcement,
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
            Announcements.copyOf(announcementsRecord, (updated) => {
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
      {...getOverrideProps(overrides, "AnnouncementsUpdateForm")}
      {...rest}
    >
      <TextField
        label="Title"
        isRequired={false}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title: value,
              announcement,
              coursesID,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <TextField
        label="Announcement"
        isRequired={false}
        isReadOnly={false}
        value={announcement}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              announcement: value,
              coursesID,
            };
            const result = onChange(modelFields);
            value = result?.announcement ?? value;
          }
          if (errors.announcement?.hasError) {
            runValidationTasks("announcement", value);
          }
          setAnnouncement(value);
        }}
        onBlur={() => runValidationTasks("announcement", announcement)}
        errorMessage={errors.announcement?.errorMessage}
        hasError={errors.announcement?.hasError}
        {...getOverrideProps(overrides, "announcement")}
      ></TextField>
      <TextField
        label="Courses id"
        isRequired={true}
        isReadOnly={false}
        value={coursesID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              announcement,
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
          isDisabled={!(idProp || announcementsModelProp)}
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
              !(idProp || announcementsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
