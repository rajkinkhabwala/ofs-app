import { Button } from "@mantine/core";
import { DataTable } from "mantine-datatable";
import { PropsWithChildren } from "react";
import { ListDepartmentResult } from "../../page-components/Department/Department.component";
import { IconPlus, IconEdit, IconTrash, IconEyeFilled } from "@tabler/icons-react";
import { modals } from "@mantine/modals";
import '../../styles/_table.scss';
import CreateDepartmentModal from "./Department.Create.Modal";
import { deleteDepartment } from "../../api/graphql/departments/api.department";
import { notifications } from "@mantine/notifications";

function DepartmentTable({items, errors, nextToken, extenstions} : PropsWithChildren<ListDepartmentResult>) {
  console.log(items)

  const removeDepartment = (val: any) => {
    deleteDepartment({id : val.id}).then(() => {
      notifications.show({
        title: 'Successful',
        message: `Successfully deleted 1 record`,
        color: 'red'
      })
    });
  }

return(
    <div className="table-template">
      <div className="table-header">
        <Button className="add-course" leftIcon={<IconPlus />} onClick={() => modals.open({
          title: "Create Department",
          children: (
            <>
            <CreateDepartmentModal formType="new-dept" close={modals.close} />
            </>
          )
        })}>
          Add Department
        </Button>
      </div>
      <DataTable
        withBorder
        withColumnBorders
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
            render: (rowData) => {
              
              return(
              <div className="crud-btn-container">
                <span>
                  <IconEdit strokeWidth={2} color={'blue'} onClick={() => modals.open({
                    title: "Edit Department",
                    children: (
                      <>
                        <CreateDepartmentModal formType="edit-dept" rowData={rowData}/>
                      </>
                      )
                    })}/></span>
                <span onClick={() => removeDepartment(rowData)}><IconTrash strokeWidth={2} color={'red'}/></span>
                <span><IconEyeFilled strokeWidth={2} color={'gray'} /></span>
              </div>
            )},
          }
        ]}
      />
      </div>
)

}

export default DepartmentTable;