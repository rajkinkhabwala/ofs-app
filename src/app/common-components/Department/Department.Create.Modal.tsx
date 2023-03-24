import { Button, Group, Textarea, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { modals } from "@mantine/modals";
import { CreateDepartmentsInput } from "../../../API";
import { createDepartment } from "../../api/graphql/departments/api.department";

function CreateDepartmentModal() {
  const form = useForm<CreateDepartmentsInput>({
    initialValues: {
      deparment_name: "",
      department_description: "",
      department_id: "",
    },
    //validate: needs to be done TODO
  });

  function handleSubmit(values: CreateDepartmentsInput) {
    console.log(values);
    createDepartment(values);
  }

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <TextInput
        withAsterisk
        label="Department Name"
        placeholder="Enter the department name..."
        required
        {...form.getInputProps("deparment_name")}
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

export default CreateDepartmentModal;
