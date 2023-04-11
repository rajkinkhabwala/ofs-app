import { Button, Group, Textarea, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { Switch } from '@mantine/core';
import { Select } from '@mantine/core';
import {
  CreateCoursesInput,
  Courses,
  UpdateCoursesInput,
} from "../../../API";
import {
  createCourse,
  updateCourse,
} from "../../api/graphql/courses/api.course";
import "../../styles/_modal.scss"

interface CustomCoursesFormModal extends FormModal<Courses> {
  refetch?: any
  departmentData?: any
}


function CourseModal({ formType, record, refetch, departmentData }: CustomCoursesFormModal) {

  let form = useForm<any>({
    initialValues:
      formType === "new"
        ? {
          course_name: "",
          course_code: "",
          course_visibility: false,
          departmentsID: ""
        }
        : {
          id: record?.id,
          course_name: record?.course_name,
          course_code: record?.course_code,
          course_visibility: record?.course_visibility,
          departmentsID: record?.departmentsID
        },
  });
  

  function handleSubmit(values: CreateCoursesInput) {
    createCourse(values).then((values) => {
      let d = values.data?.createCourses?.course_name;
      notifications.show({
        title: "Successful",
        message: `Successfully added ${d}`,
        color: "green",
      });
      refetch();
      form.reset();
    });
  }

  function handleEdit(values: UpdateCoursesInput) {
    console.log("edited");
    updateCourse(values).then(() => {
      notifications.show({
        title: "Successful",
        message: `Successfully edited`,
        color: "green",
      });
      refetch();
      form.reset();
    });
  }

  return (
    <div className="modal-template">
      <form
        onSubmit={
          formType === "new"
            ? form.onSubmit(handleSubmit)
            : form.onSubmit(handleEdit)
        }
      >
        <TextInput
          withAsterisk
          label="Course Name"
          placeholder="Enter the course name..."
          required
          {...form.getInputProps("course_name")}
        />
        <TextInput
          withAsterisk
          label="Course Code"
          placeholder="Enter the course code..."
          required
          {...form.getInputProps("course_code")}
        />
        {/* <Textarea
          placeholder="Course Description"
          label="Enter the course description"
          {...form.getInputProps("course_description")}
        /> */}

        <div className="switch-label">
          <label>Visibility <span>*</span></label>
        </div>
        <Switch
          checked={form.getInputProps("course_visibility").value}
          {...form.getInputProps("course_visibility")} />

        <Select {...form.getInputProps("departmentsID")}
         label="Your favorite framework/library"
         placeholder="Pick one"
         data={departmentData.items.map((el: any) => (
            {value : el.id, label: el.department_name}
          )
         )}
       />
        
        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </div>
  );
}

export default CourseModal;
