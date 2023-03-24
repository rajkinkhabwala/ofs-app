import { Button, Group, Textarea, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { CreateDepartmentsInput } from "../../../API";
import { createDepartment } from "../../api/graphql/departments/api.department";

function CreateDepartmentModal() {
  const form = useForm<CreateDepartmentsInput>({
    initialValues: {
      department_name: "",
      department_description: "",
      department_id: "",
    },
    //validate: needs to be done TODO by Ish
  });

  function handleSubmit(values: CreateDepartmentsInput) {
    createDepartment(values).then((values) => {
      let d = values.data?.createDepartments?.department_name;
      notifications.show({
        title: 'Successful',
        message: `Successfully added ${d}`,
        color: 'green'
      })
      form.reset()
    });
  }

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
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

export default CreateDepartmentModal;
