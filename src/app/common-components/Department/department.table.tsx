import { Button } from "@mantine/core";
import { DataTable } from "mantine-datatable";
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

function DepartmentTable({items, isLoading, refetch } : PropsWithChildren<any>) {

  const navigate = useNavigate();

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
        deleteDepartment(val.id).then((value) => {
          console.log(value)
          notifications.show({
            title: 'Successful',
            message: `Successfully deleted ${value.data?.deleteDepartments?.department_name}!`,
            color: 'red'
          })
          refetch();
        });
      },  
    })
    
  }

return(
    <div className={isLoading ? `table-template table-loading` : "table-template"}>
      <div className="table-header">
        <Button className="add-course" leftIcon={<IconPlus />} onClick={() => modals.open({
          title: "Create Department",
          children: (
            <>
              <DepartmentModal formType="new" refetch={refetch} />
            </>
          )
        })}>
          Add Department
        </Button>
      </div>
      <DataTable
        withBorder
        withColumnBorders
        fetching={isLoading}
        records={items}
        style={{
          borderRadius: 5,
          borderWidth: "1px"
        }}
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
                        <DepartmentModal formType="edit" record={rowData} refetch={refetch}/>
                      </>
                      )
                    })}/></span>
                <span onClick={() => removeDepartment(rowData)}><IconTrash strokeWidth={2} color={'red'}/></span>
                <span><IconEyeFilled strokeWidth={2} color={'gray'} onClick={() => navigate(`department/${rowData.id}`)}/></span>
              </div>
            )},
          }
        ]}
      />
      </div>
)

}

export default DepartmentTable;
