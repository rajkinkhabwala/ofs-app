import { Button, Group, Loader, Textarea, TextInput, SelectItem } from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { Switch } from '@mantine/core';
import { Select } from '@mantine/core';
import {
  CreateUsersInput,
  Users,
  UpdateUsersInput,
  Departments,
} from "../../../API";
import {
  createUser,
  updateUser,
} from "../../api/graphql/users/api.user";
import "../../styles/_modal.scss"
import { useMutation, useQueryClient } from "react-query";
import { useListDepartmentQuery } from "../../api/queries/departments/queries.departments";


function UserModal({ formType, record}: FormModal<Users>) {


  let form = useForm<any>({
    initialValues:
      formType === "new"
        ? {
          name: "",
          email: "",
        }
        : {
          id: record?.id,
          course_name: record?.name,
          course_code: record?.email,
        },

  });  
  
    const queryClient = useQueryClient();

    const { data, isError, isLoading} = useListDepartmentQuery(); 

    // Create
    const createMutation = useMutation({
      mutationFn: createUser,
    });

    // Update
    const updateMutation = useMutation({
      mutationFn: updateUser
    });   
    
  function handleSubmit(values: CreateUsersInput) {
      createMutation.mutate(values, {
        onSuccess(data, variables, context) {

          notifications.show({
            title: "Successful",
            message: `Successfully added ${data.data?.createUsers?.name}`,
            color: "green",
          });

          queryClient.invalidateQueries({queryKey: ['user']})
          form.reset();
        },
      });
    }

  function handleEdit(values: UpdateUsersInput) {
      updateMutation.mutate(values, {
        onSuccess(data, variables, context) {

          notifications.show({
            title: "Successful",
            message: `Successfully edited ${data.data?.updateUsers?.name}`,
            color: "green",
          }); 
          queryClient.invalidateQueries({ queryKey: ['user'] })
          
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
          label="Name"
          placeholder="Enter the user's name..."
          required
          {...form.getInputProps("name")}
        />
        <TextInput
          withAsterisk
          label="email"
          placeholder="Enter user email"
          required
          {...form.getInputProps("email")}
        />
        
        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </div>
  );
}

export default UserModal;
