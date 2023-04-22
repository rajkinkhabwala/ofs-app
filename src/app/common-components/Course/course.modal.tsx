import { Button, Group, Loader, Textarea, TextInput, SelectItem } from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { Switch } from '@mantine/core';
import { Select } from '@mantine/core';
import {
  CreateCoursesInput,
  Courses,
  UpdateCoursesInput,
  Departments,
} from "../../../API";
import {
  createCourse,
  updateCourse,
} from "../../api/graphql/courses/api.course";
import "../../styles/_modal.scss"
import { useMutation, useQueryClient } from "react-query";
import { useListDepartmentQuery } from "../../api/queries/departments/queries.departments";
import { DatePickerInput } from "@mantine/dates";




function CourseModal({ formType, record}: FormModal<Courses>) {


  let form = useForm<any>({
    initialValues:
      formType === "new"
        ? {
          course_name: "",
          course_code: "",
          course_start_date: "",
          course_end_date: "",
          course_visibility: false,
          departmentsID: ""
        }
        : {
          id: record?.id,
          course_name: record?.course_name,
          course_code: record?.course_code,
          course_start_date: "",
          course_end_date: "",
          course_visibility: record?.course_visibility,
          departmentsID: record?.departmentsID
        },
  });
  
    const queryClient = useQueryClient();

    const { data, isError, isLoading} = useListDepartmentQuery(); 

    // Create
    const createMutation = useMutation({
      mutationFn: createCourse,
    });

    // Update
    const updateMutation = useMutation({
      mutationFn: updateCourse
    });   
    
  function handleSubmit(values: CreateCoursesInput) {
      createMutation.mutate(values, {
        onSuccess(data, variables, context) {

          notifications.show({
            title: "Successful",
            message: `Successfully added ${data.data?.createCourses?.course_name}`,
            color: "green",
          });

          queryClient.invalidateQueries({queryKey: ['courses']})
          form.reset();
        },
      });
    }

  function handleEdit(values: UpdateCoursesInput) {
      updateMutation.mutate(values, {
        onSuccess(data, variables, context) {

          notifications.show({
            title: "Successful",
            message: `Successfully edited ${data.data?.updateCourses?.course_name}`,
            color: "green",
          }); 
          queryClient.invalidateQueries({ queryKey: ['courses'] })
          
          },
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
        
        <div className="switch-label">
          <label>Visibility <span>*</span></label>
        </div>
        <Switch
          checked={form.getInputProps("course_visibility").value}
          {...form.getInputProps("course_visibility")} />
      
        <Select {...form.getInputProps("departmentsID")}
         label="Course Department"
         rightSection={isLoading ? <Loader />: null}
         error={isError ?? "Data is not fetch!"}
         placeholder="Pick one department"
         data={isLoading ? [] : data?.items.map((el: Departments) => ({value: el.id, label: el.department_name, selected: record ? record : null})
       )}
       />

<DatePickerInput
      label="Pick start date"
      placeholder="Pick start date"
      {...form.getInputProps("course_start_date")}
      required
    />
    <DatePickerInput
      label="Pick end date"
      placeholder="Pick end date"
      {...form.getInputProps("course_end_date")}
      required
    />
        
        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </div>
  );
}

export default CourseModal;
