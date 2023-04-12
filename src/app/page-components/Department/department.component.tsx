import { listDepartment } from "../../api/graphql/departments/api.department";
import { Title } from "@mantine/core";
import DepartmentTable from "../../common-components/Department/department.table";
import { useQuery } from "react-query";

export function Component() {
  const { data, isLoading, error, isError, refetch, isFetching, status } = useQuery(["departments"], () =>
    listDepartment(),
    {
    refetchOnWindowFocus: false,
    }
  );
  
  return (
    <>
      <Title order={1}>Departments</Title>
      {
        isError ?
        <>
        {error}
        </>
      : status === "success" ?
      <DepartmentTable items={data?.items} isLoading={isLoading} refetch={refetch}/> :
      <>
      <DepartmentTable items={[]} isLoading={isLoading || isFetching} />
      </>
      }
      
    </>
  );
}


Component.displayName = "Department";
