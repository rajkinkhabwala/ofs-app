import { Button } from "@mantine/core";
import { DataTable } from "mantine-datatable";
import { PropsWithChildren } from "react";
import { GraphQLResult } from "../../types/result.type";
import { IconPlus, IconEdit, IconTrash, IconEyeFilled } from "@tabler/icons-react";
import { modals } from "@mantine/modals";
import '../../styles/_table.scss';
import { notifications } from "@mantine/notifications";

function CourseTable({items, errors, nextToken, extenstions} : PropsWithChildren<GraphQLResult>) {
  console.log(items)

//   const removeDepartment = (val: any) => {
//     deleteDepartment({id : val.id}).then(() => {
//       notifications.show({
//         title: 'Successful',
//         message: `Successfully deleted 1 record`,
//         color: 'red'
//       })
//     });
//   }

return(
    <div className="table-template">
      <div className="table-header">
        <Button className="add-course" leftIcon={<IconPlus />} onClick={() => modals.open({
            fullScreen:true,
            title: "Create a Course",
            children: (
            <>
            {/* Add Value here */}
            This is children
            </>
          )
        })}>
          Add Course
        </Button>
      </div>
      <DataTable
        withBorder
        withColumnBorders
        // records={items}
        style={{
          borderRadius: 5,
          borderWidth: "1px"
        }}
        columns={[
          { accessor: "course_code", width: "40%", title: "Course ID" },
          { accessor: "course_name", width: "40%", title: "Course Name" },
          {
            accessor: "Modify", width:"20%",
            render: (rowData) => {
              
              return(
              <div className="crud-btn-container">
                <span>
                  <IconEdit strokeWidth={2} color={'blue'} 
                //   onClick={() => modals.open({
                //     title: "Edit Department",
                //     children: (
                //       <>
                //         <CreateDepartmentModal formType="edit-dept" rowData={rowData}/>
                //       </>
                //       )
                //     })}
                /></span>
                <span><IconTrash strokeWidth={2} color={'red'}/></span>
                <span><IconEyeFilled strokeWidth={2} color={'gray'} /></span>
              </div>
            )},
          }
        ]}
      />
      </div>
)

}

export default CourseTable;