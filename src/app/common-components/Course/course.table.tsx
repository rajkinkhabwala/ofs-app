import { Button } from "@mantine/core";
import { DataTable } from "mantine-datatable";
import { PropsWithChildren } from "react";
import { IconPlus, IconEdit, IconTrash, IconEyeFilled } from "@tabler/icons-react";
import {Text} from "@mantine/core"
import { modals } from "@mantine/modals";
import '../../styles/_table.scss';
import { deleteCourse } from "../../api/graphql/courses/api.course";
import { notifications } from "@mantine/notifications";
import { Courses } from "../../../API";
import { useNavigate } from "react-router-dom";

function CourseTable({items, isLoading, refetch } : PropsWithChildren<any>) {

  const navigate = useNavigate();

  const removeCourse = (val: Courses) => {
    modals.openConfirmModal({
      title: 'Delete your profile',
      centered: true,
      children: (
        <Text size="sm">
          Are you sure you want to delete department {val.course_name}? This action is destructive and you will have
          to contact support to restore your data.
        </Text>
      ),
      labels: { confirm: 'Delete Course', cancel: "No don't delete it" },
      confirmProps: { color: 'red' },
      onConfirm: () => {
        deleteCourse(val.id).then((value) => {
          console.log(value)
          notifications.show({
            title: 'Successful',
            message: `Successfully deleted ${value.data?.deleteCourses?.course_name}!`,
            color: 'red'
          })
          refetch();
        });
      },  
    })
    
  }

return(
    <div className="table-template">
      <div className="table-header">
        <Button className="add-course" leftIcon={<IconPlus />} onClick={() => modals.open({
          title: "Create Course",
          children: (
            <>
            Will Add soon
            </>
          )
        })}>
          Add Course
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
          { accessor: "course_code", width: "40%", title: "Course Code" },
          { accessor: "course_name", width: "40%", title: "Course Name" },
          {
            accessor: "Modify", width:"20%",
            render: (rowData: Courses) => {
              
              return(
              <div className="crud-btn-container">
                <span>
                  <IconEdit strokeWidth={2} color={'blue'} onClick={() => modals.open({
                    title: "Edit Course",
                    children: (
                      <>
                        Will Add Soon!
                      </>
                      )
                    })}/></span>
                <span onClick={() => removeCourse(rowData)}><IconTrash strokeWidth={2} color={'red'}/></span>
                <span><IconEyeFilled strokeWidth={2} color={'gray'} onClick={() => navigate(`course/${rowData.id}`)}/></span>
              </div>
            )},
          }
        ]}
      />
      </div>
)

}

export default CourseTable;