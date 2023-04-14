import { Button, Group, Textarea, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import {
  CreateDepartmentsInput,
  Departments,
  UpdateDepartmentsInput,
} from "../../../API";
import {
  createDepartment,
  updateDepartment,
} from "../../api/graphql/departments/api.department";
import { useMutation, useQueryClient } from "react-query";


function DepartmentModal({ formType, record}: FormModal<Departments>) {

  let form = useForm<any>({
    initialValues:
      formType === "new"
        ? {
            department_name: "",
            department_description: "",
            department_id: "",
          }
        : {
            id: record?.id,
            department_name: record?.department_name,
            department_description: record?.department_description,
            department_id: record?.department_id,
          },
  });

  const queryClient = useQueryClient();
  const createMutation = useMutation({
    mutationFn: createDepartment,
  });

  const updateMutation = useMutation({
    mutationFn: updateDepartment
  });

  function handleSubmit(values: CreateDepartmentsInput) {
    createMutation.mutate(values, {
      onSuccess(data, variables, context) {
        
        notifications.show({
          title: "Successful",
          message: `Successfully added ${data.data?.createDepartments?.department_name}`,
          color: "green",
        }); 

      queryClient.invalidateQueries({ queryKey: ['departments'] })
      form.reset();
      },
    });
    
  }

  function handleEdit(values: UpdateDepartmentsInput) {
    updateMutation.mutate(values, {
      onSuccess(data, variables, context) {
        
        notifications.show({
          title: "Successful",
          message: `Successfully edited ${data.data?.updateDepartments?.department_name}`,
          color: "green",
        }); 

      queryClient.invalidateQueries({ queryKey: ['departments'] })
      form.reset();
      },
    });
  }

  return (
    <form
      onSubmit={
        formType === "new"
          ? form.onSubmit(handleSubmit)
          : form.onSubmit(handleEdit)
      }
    >
      <TextInput
        withAsterisk
        label="Department Name"
        placeholder="Enter the department name..."
        required
        {...form.getInputProps("department_name")}
      />
      <TextInput
        withAsterisk
        label="Department ID"
        placeholder="Enter the department id..."
        required
        {...form.getInputProps("department_id")}
      />
      <Textarea
        placeholder="Department Description"
        label="Enter the department description"
        {...form.getInputProps("department_description")}
      />
      <Group position="right" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}

export default DepartmentModal;
