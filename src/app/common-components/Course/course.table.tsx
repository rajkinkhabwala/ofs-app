import { Button, Loader } from "@mantine/core";
// import { DataTable } from "mantine-datatable";
import { PropsWithChildren, useState } from "react";
import { IconPlus, IconEdit, IconTrash, IconEyeFilled } from "@tabler/icons-react";
import {Text} from "@mantine/core"
import { modals } from "@mantine/modals";
import '../../styles/_table.scss';
import { deleteCourse } from "../../api/graphql/courses/api.course";
import { notifications } from "@mantine/notifications";
import { Courses } from "../../../API";
import { useNavigate } from "react-router-dom";
import { getDepartment, listDepartment } from "../../api/graphql/departments/api.department";
import CourseModal from "./course.modal";
import { useQuery } from "react-query";
import { IconEyeCheck } from '@tabler/icons-react';
import { IconEyeOff } from '@tabler/icons-react';
import Table from "../Table/table.component"
import {CourseGraphQLResult} from "../../types/result.type";
import { useMutation, useQueryClient } from "react-query";
import { useDepartmentQuery } from "../../api/queries/departments/queries.departments";

// function CourseTable({items, isLoading, refetch } : PropsWithChildren<any>) {
  interface CourseTableProps extends PropsWithChildren {
    data: CourseGraphQLResult | undefined | null,
    isLoading: boolean,
    enableHeader: boolean
  }
  
  
  function CourseTable({data, isLoading, enableHeader} : CourseTableProps) {

    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const deleteMutation = useMutation(deleteCourse);
    console.log(data)

  //const [departmentID, setDepartmentID] = useState('');

  //const { data: departmentData, isError: isDepartmentError, isLoading: isDepartmentLoading } = useDepartmentQuery(departmentID);
  
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
        deleteMutation.mutate(val.id, {
          onSuccess(data, variables, context) {
            notifications.show({
              title: 'Successful',
              message: `Successfully deleted ${data.data?.deleteCourses?.course_name}!`,
              color: 'red'
            });
            queryClient.invalidateQueries({queryKey: ["courses"]})   
          },
        })
      },  
    })
    
  }  

return(
  <Table<Courses>
    records={data?.items!} 
    columns={[
          { accessor: "course_code", title: "Course Code" },
          { accessor: "course_name", title: "Course Name" },
          { accessor: "course_visibility", title: "Visibility",
            render: (vis: any) => {
              return(
                <div style={{textAlign: "center"}}>
                  {vis.course_visibility ? <IconEyeCheck
                                                size={24}
                                                strokeWidth={2}
                                                color={'green'}
                                              /> :
                                              <IconEyeOff
                                              size={24}
                                              strokeWidth={2}
                                              color={'#ff0000'}
                                            />}
                </div>
              )
            }
          },
          { accessor: "departmentsID", width: "40%", title: "Department",
            render: (course: Courses) => {
              return (<>{course.departmentsID}</>)
            }
          },
          { 
            accessor: "Modify", width: "20%",
            render: (rowData: Courses) => {
              
              return(
              <div className="crud-btn-container">
            <span>
                  <IconEdit strokeWidth={2} color={'blue'} onClick={() => modals.open({
            title: "View Course",
            children: (
              <>
                <CourseModal formType="edit" record={rowData} />
              </>
            ) 
          })}/></span>
          <span onClick={() => removeCourse(rowData)}><IconTrash strokeWidth={2} color={'red'}/></span>
          <span><IconEyeFilled strokeWidth={2} color={'gray'} onClick={() => navigate(`${rowData.id}`)}/></span>
      </div>
    )},
   }
  ]}

    header= {
      enableHeader? 
      <Button className="add-course" leftIcon={<IconPlus />} onClick={() => modals.open({
              title: "Create Course",
              children: (
                <>
                  <CourseModal formType="new" />
                </>
              )
            })}>
              Add Course
            </Button>
      :
      <>

      </>
    }
    fetching={isLoading}
    />
)

}

export default CourseTable;