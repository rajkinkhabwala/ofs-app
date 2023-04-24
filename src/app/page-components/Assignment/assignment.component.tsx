import { Title } from "@mantine/core";
import AssignmentTable from "../../common-components/Assignment/assignment.table";
import { useListAssignmentQuery } from "../../api/queries/assignments/queries.assignments";

export function Component() {
    const { data, isLoading} = useListAssignmentQuery();

  return (
    <>
      <Title order={1}>Assignments</Title>
      <AssignmentTable data={data} isLoading={isLoading} enableHeader={true} />
    </>
  );
}


Component.displayName = "Assignment";
