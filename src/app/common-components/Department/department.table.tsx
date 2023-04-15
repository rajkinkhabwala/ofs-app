import { Button } from "@mantine/core";
import { PropsWithChildren } from "react";
import { IconPlus, IconEdit, IconTrash, IconEyeFilled } from "@tabler/icons-react";
import {Text} from "@mantine/core"
import { modals } from "@mantine/modals";
import '../../styles/_table.scss';
import DepartmentModal from "./department.modal";
import { deleteDepartment } from "../../api/graphql/departments/api.department";
import { notifications } from "@mantine/notifications";
import { Departments } from "../../../API";
import { useNavigate } from "react-router-dom";
import Table from "../Table/table.component";
import { DepartmentGraphQLResult } from "../../types/result.type";
import { useMutation, useQueryClient } from "react-query";


interface DepartmentTableProps extends PropsWithChildren {
  data: DepartmentGraphQLResult | undefined | null,
  isLoading: boolean,
  enableHeader: boolean
}


function DepartmentTable({data, isLoading, enableHeader} : DepartmentTableProps) {

  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const deleteMutation = useMutation(deleteDepartment);

  
  const removeDepartment = (val: Departments) => {

    modals.openConfirmModal({
      title: 'Delete your profile',
      centered: true,
      children: (
        <Text size="sm">
          Are you sure you want to delete department {val.department_name}? This action is destructive and you will have
          to contact support to restore your data.
        </Text>
      ),
      labels: { confirm: 'Delete Department', cancel: "No don't delete it" },
      confirmProps: { color: 'red' },
      onConfirm: () => {
        deleteMutation.mutate(val.id, {
          onSuccess(data, variables, context) {
            notifications.show({
              title: 'Successful',
              message: `Successfully deleted ${data.data?.deleteDepartments?.department_name}!`,
              color: 'red'
            });
            queryClient.invalidateQueries({queryKey: ["departments"]})   
          },
        })
      },  
    })
    
  }

return(
    <Table<Departments>
    records={data?.items!} 
    columns={[
          { accessor: "department_id", width: "40%", title: "Department ID" },
          { accessor: "department_name", width: "40%", title: "Department Name" },
          {
            accessor: "Modify", width:"20%",
            render: (rowData: Departments) => {
              
              return(
              <div className="crud-btn-container">
                <span>
                  <IconEdit strokeWidth={2} color={'blue'} onClick={() => modals.open({
                    title: "Edit Department",
                    children: (
                      <>
                        <DepartmentModal formType="edit" record={rowData} />
                      </>
                      )
                    })}/></span>
                <span onClick={() => removeDepartment(rowData)}><IconTrash strokeWidth={2} color={'red'}/></span>
                <span><IconEyeFilled strokeWidth={2} color={'gray'} onClick={() => navigate(`${rowData.id}`)}/></span>
              </div>
            )},
          }
    ]}
    
    header= {
      enableHeader? 
      <Button className="add-course" leftIcon={<IconPlus />} onClick={() => modals.open({
              title: "Create Department",
              children: (
                <>
                  <DepartmentModal formType="new" />
                </>
              )
            })}>
              Add Department
            </Button>
      :
      <>
      
      </>
    }
    fetching={isLoading}
    />
)
}

export default DepartmentTable;
