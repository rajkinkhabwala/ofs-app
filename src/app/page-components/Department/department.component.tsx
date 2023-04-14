import { listDepartment } from "../../api/graphql/departments/api.department";
import { Title } from "@mantine/core";
import DepartmentTable from "../../common-components/Department/department.table";
import { useQuery} from "react-query";
import { ErrorComponent } from "../../common-components/Errors/Error/Error.component";

export function Component() {
  
  const { data, isLoading, error, isError } = useQuery(["departments"], () =>
    listDepartment(),
    {
    refetchOnWindowFocus: false,
    }
  );
  
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
