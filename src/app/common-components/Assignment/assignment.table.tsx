import { Button, Loader } from "@mantine/core";
// import { DataTable } from "mantine-datatable";
import { PropsWithChildren, useState } from "react";
import { IconPlus, IconEdit, IconTrash, IconEyeFilled } from "@tabler/icons-react";
import {Text} from "@mantine/core"
import { modals } from "@mantine/modals";
import '../../styles/_table.scss';
import { deleteAssignment } from "../../api/graphql/assignments/api.assignment";
import { notifications } from "@mantine/notifications";
import { AssignmentSubmissions, Assignments, Courses } from "../../../API";
import { useNavigate } from "react-router-dom";
import { getCourse, listCourse } from "../../api/graphql/courses/api.course";
import AssignmentModal from "./assignment.modal";
import { useQuery } from "react-query";
import { IconEyeCheck } from '@tabler/icons-react';
import { IconEyeOff } from '@tabler/icons-react';
import Table from "../Table/table.component"
import {AssignmentGraphQLResult} from "../../types/result.type";
import { useMutation, useQueryClient } from "react-query";
import { useCourseQuery } from "../../api/queries/courses/queries.courses";
import { Assignment } from "aws-sdk/clients/mturk";

// function AssignmentTable({items, isLoading, refetch } : PropsWithChildren<any>) {
  interface AssignmentTableProps extends PropsWithChildren {
    data: AssignmentGraphQLResult | undefined | null | any,
    isLoading: boolean,
    enableHeader: boolean
  }
  
  
  function AssignmentTable({data, isLoading, enableHeader} : AssignmentTableProps) {

    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const deleteMutation = useMutation(deleteAssignment);
    console.log(data)

  //const [courseID, setCourseID] = useState('');

  // const { data: courseData, isError: isCourseError, isLoading: isCourseLoading } = useCourseQuery(coursesID);
  
  const removeAssignment = (val: Assignments) => {
    modals.openConfirmModal({
      title: 'Delete your profile',
      centered: true,
      children: (
        <Text size="sm">
          Are you sure you want to delete course {val.assignment_name}? This action is destructive and you will have
          to contact support to restore your data.
        </Text>
      ),
      labels: { confirm: 'Delete Assignment', cancel: "No don't delete it" },
      confirmProps: { color: 'red' },
      onConfirm: () => {
        deleteMutation.mutate({id: val.id}, {
          onSuccess(data, variables, context) {
            notifications.show({
              title: 'Successful',
              message: `Successfully deleted ${data.data?.id}!`,
              color: 'red'
            });
            queryClient.invalidateQueries({queryKey: ["assignments"]})   
          },
        })
      },  
    })
    
  }  

return(
  <Table<Assignments>
    records={data?.items!} 
    columns={[
          { accessor: "assignment_code", title: "Assignment Code" },
          { accessor: "assignment_name", title: "Assignment Name" },
          { accessor: "teacher", title: "Teacher",
                render: (assignment: Assignments) => {
                    return(<>{assignment.teacher}</>)
                }
          },
          {accessor: "AssignmentSubmissions", title: "Assignment Submissions",
                render: (assignment: Assignments) => {
                  return(<>{assignment.AssignmentSubmissions}</>)
                }
        },
        //   { accessor: "course_name", width: "40%", title: "Course",
        //     render: (assignment: coursesID) => {
        //       return (<>{assignment.}</>)
        //     }
        //   },
          { 
            accessor: "Modify", width: "20%",
            render: (rowData: Assignments) => {
              
              return(
              <div className="crud-btn-container">
            <span>
                  <IconEdit strokeWidth={2} color={'blue'} onClick={() => modals.open({
            title: "View Assignment",
            children: (
              <>
                <AssignmentModal formType="edit" record={rowData} />
              </>
            ) 
          })}/></span>
          <span onClick={() => removeAssignment(rowData)}><IconTrash strokeWidth={2} color={'red'}/></span>
          <span><IconEyeFilled strokeWidth={2} color={'gray'} onClick={() => navigate(`${rowData.id}`)}/></span>
      </div>
    )},
   }
  ]}

    header= {
      enableHeader? 
      <Button className="add-assignment" leftIcon={<IconPlus />} onClick={() => modals.open({
              title: "Create Assignment",
              children: (
                <>
                  <AssignmentModal formType="new" />
                </>
              )
            })}>
              Add Assignment
            </Button>
      :
      <>

      </>
    }
    fetching={isLoading}
    />
)

}

export default AssignmentTable;