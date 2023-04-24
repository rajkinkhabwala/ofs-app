import { Button, Loader } from "@mantine/core";
import { PropsWithChildren, useState } from "react";
import { IconPlus, IconEdit, IconTrash, IconEyeFilled } from "@tabler/icons-react";
import { Text } from "@mantine/core"
import { modals } from "@mantine/modals";
import '../../styles/_table.scss';
import { notifications } from "@mantine/notifications";
import { Courses, Users } from "../../../API";
import { useNavigate } from "react-router-dom";
import  UserModal from "./user.modal";
import { IconEyeCheck } from '@tabler/icons-react';
import { IconEyeOff } from '@tabler/icons-react';
import Table from "../Table/table.component"
import { CourseGraphQLResult } from "../../types/result.type";
import { useMutation, useQueryClient } from "react-query";
import { deleteUser } from "../../api/graphql/users/api.user";

interface CourseTableProps extends PropsWithChildren {
    data: CourseGraphQLResult | undefined | null,
    isLoading: boolean,
    enableHeader: boolean
}


function UserTable({ data, isLoading, enableHeader }: CourseTableProps) {

    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const deleteMutation = useMutation(deleteUser);

    const removeUser = (val: Users) => {
        
        modals.openConfirmModal({
            title: 'Delete your profile',
            centered: true,
            children: (
                <Text size="sm">
                    Are you sure you want to delete user {val.name}? This action is destructive and you will have
                    to contact support to restore your data.    
                </Text>
            ),
            labels: { confirm: 'Delete Course', cancel: "No don't delete it" },
            confirmProps: { color: 'red' },
            onConfirm: () => {
                deleteMutation.mutate({id: val.id}, {
                    onSuccess(data, variables, context) {
                        console.log(data);
                        
                        notifications.show({
                            title: 'Successful',
                            message: `Successfully deleted user !`,
                            color: 'red'
                        });
                        queryClient.invalidateQueries({ queryKey: ["users"] })
                    },
                })
            },
        })

    }

    return (
        <Table<Users>
            records={data?.items!}
            columns={[
                { accessor: "name", width: "30%", title: "Name" },
                { accessor: "email", width: "20%", title: "Email Address" },
                {
                    accessor: "Modify", width: "20%",
                    render: (rowData: Users) => {
                        return (
                            <div className="crud-btn-container">
                                <span>
                                    <IconEdit strokeWidth={2} color={'blue'} onClick={() => modals.open({
                                        title: "View Course",
                                        children: (
                                            <>
                                                <UserModal formType="edit" record={rowData} />
                                            </>
                                        )
                                    })} /></span>
                                <span onClick={() => removeUser(rowData)}><IconTrash strokeWidth={2} color={'red'}/></span>
                                <span><IconEyeFilled strokeWidth={2} color={'gray'} onClick={() => navigate(`${rowData.id}`)} /></span>
                            </div>
                        )
                    },
                }
            ]}
            header={
                enableHeader ?
                    <Button className="add-course" leftIcon={<IconPlus />} onClick={() => modals.open({
                        title: "Create User",
                        children: (
                            <>
                                <UserModal formType="new" />
                            </>
                        )
                    })}>
                        Add User
                    </Button>
                    :
                    <>

                    </>
            }
            fetching={isLoading}
        />
    )

}

export default UserTable;