import { Button } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import { DataTable } from "mantine-datatable";
import { PropsWithChildren } from "react";
import { ListDepartmentResult } from "../../page-components/Department/Department.component";
import { modals } from "@mantine/modals";
import '../../styles/_table.scss';
import CreateDepartmentModal from "./Department.Create.Modal";

function DepartmentTable({items, errors, nextToken, extenstions} : PropsWithChildren<ListDepartmentResult>) {
  console.log(items)
return(
    <div className="table-template">
      <div className="table-header">
        <Button className="add-course" leftIcon={<IconPlus />} onClick={() => modals.open({
          title: "Create Department",
          children: (
            <>
            <CreateDepartmentModal />
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
        columns={[
          { accessor: "department_id", width: "40%", title: "Department ID" },
          { accessor: "department_name", width: "40%", title: "Department Name" },
        //   {
        //     accessor: "Modify",
        //     render: ({ id }) => (
        //       <div className="crud-btn-container">
        //         <span>edit</span>
        //         <span>delete</span>
        //         <span>view</span>
        //       </div>
        //     ),
        //   },
        ]}
      />
      </div>
)

}

export default DepartmentTable;