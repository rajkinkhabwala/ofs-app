import { Title } from "@mantine/core";
import DepartmentTable from "../../common-components/Department/department.table";
import { ErrorComponent } from "../../common-components/Errors/Error/Error.component";
import { useListDepartmentQuery } from "../../api/queries/departments/queries.departments";

export function Component() {
  
  const { data, isLoading, error, isError } = useListDepartmentQuery();
  
  if(isError) {
    return(
      <ErrorComponent error={error} />
    )
  }
  

  return (
    <>
      <Title order={1}>Departments</Title>
      <DepartmentTable data={data} isLoading={isLoading} enableHeader={true} /> 
    </>
  );
}


Component.displayName = "Department";
