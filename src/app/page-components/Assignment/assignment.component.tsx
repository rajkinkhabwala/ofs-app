import { Title } from "@mantine/core";
import { useQuery } from "react-query";
import { listAssignment } from "../../api/graphql/assignments/api.assignment";
import AssignmentTable from "../../common-components/Assignment/assignment.table";
import { ErrorComponent } from "../../common-components/Errors/Error/Error.component";
import { listAssignments } from "../../../graphql/queries";

export function Component() {
  // const { data, isLoading, error, isError, refetch, isFetching, status } = useQuery(["assignment"], () =>
    const { data, isLoading, error, isError} = useQuery(["assignments"], () =>
    listAssignment(),
    {
    refetchOnWindowFocus: false,
    }
  );

  if(isError) {
    return(
      <ErrorComponent />
    )
  }

  console.log(data)
  return (
    <>
      <Title order={1}>Assignments</Title>
      <AssignmentTable data={data} isLoading={isLoading} enableHeader={true} />
    </>
  );
}


Component.displayName = "Assignment";
