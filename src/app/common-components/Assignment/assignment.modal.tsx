import { Button, Group, Loader, Textarea, TextInput, SelectItem } from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { Switch } from '@mantine/core';
import { Select } from '@mantine/core';
import {
  CreateAssignmentsInput,
  Assignments,
  UpdateAssignmentsInput,
  Courses,
} from "../../../API";
import {
  createAssignment,
  updateAssignment,
} from "../../api/graphql/assignments/api.assignment";
import "../../styles/_modal.scss"
import { useMutation, useQueryClient } from "react-query";
import { useListAssignmentQuery } from "../../api/queries/assignments/queries.assignments";
import { useListCourseQuery } from "../../queries/courses/queries.courses";
import { listUsersInGroup } from "../../api/admin/api.admin";
// import { Courses } from "../../../models";




function AssignmentModal({ formType, record}: FormModal<Assignments>) {

    listUsersInGroup("Teachers").then((value: any) => console.log(value))


  let form = useForm<any>({
    initialValues:
      formType === "new"
        ? {
          id: "",
          assignment_name: "",
          teacher:"",
          coursesID: ""
        }
        : {
          id: record?.id,
          assignment_name: record?.assignment_name,
          teacher: "",
          coursesID: ""
        },
  });
  
    const queryClient = useQueryClient();

    // const { data, isError, isLoading} = useListAssignmentQuery(); 
    const { data, isError, isLoading} = useListCourseQuery(); 

    // Create
    const createMutation = useMutation({
      mutationFn: createAssignment,
    });

    // Update
    const updateMutation = useMutation({
      mutationFn: updateAssignment
    });   
    
  function handleSubmit(values: CreateAssignmentsInput) {
      createMutation.mutate(values, {
        onSuccess(data) {

          notifications.show({
            title: "Successful",
            message: `Successfully added ${data.data?.createAssignments?.assignment_name}`,
            color: "green",
          });

          queryClient.invalidateQueries({queryKey: ['assignments']})
          form.reset();
        },
      });
    }

  function handleEdit(values: UpdateAssignmentsInput) {
      updateMutation.mutate(values, {
        onSuccess(data, variables, context) {

          notifications.show({
            title: "Successful",
            message: `Successfully edited ${data.data?.updateAssignments?.assignment_name}`,
            color: "green",
          }); 
          queryClient.invalidateQueries({ queryKey: ['assignments'] })
          
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
          label="Assignment Name"
          placeholder="Enter the assignment name..."
          required
          {...form.getInputProps("assignment_name")}
        />

        <TextInput
          withAsterisk
          label="Assignment Code"
          placeholder="Enter the assignment code..."
          required
          {...form.getInputProps("id")}
        />
        {/* <TextInput
          withAsterisk
          label="Assignment Code"
          placeholder="Enter the assignment code..."
          required
          {...form.getInputProps("assignment_code")}
        /> */}

        <TextInput
          withAsterisk
          label="Teacher Name"
          placeholder="Enter the Teacher's name"
          required
          {...form.getInputProps("teacher")}
          />
        
        {/* <div className="switch-label">
          <label>Visibility <span>*</span></label>
        </div> */}
        {/* <Switch
          checked={form.getInputProps("assignment_visibility").value}
          {...form.getInputProps("assignment_visibility")} /> */}
      
        <Select {...form.getInputProps("coursesID")}
         label="Course ID"
         rightSection={isLoading ? <Loader />: null}
         error={isError ?? "Data is not fetch!"}
         placeholder="Pick one Course"
         data={isLoading ? [] : data?.items.map((el: Assignments) => ({value: el.coursesID, label: el.coursesID, selected: record ? record : null})
       )}
       />
        
        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </div>
  );
}

export default AssignmentModal;
