import DepartmentTable from "../../common-components/Department/department.table";
import { useListDepartmentQuery } from "../../api/queries/departments/queries.departments";
import { Page } from "../../common-components/Page/Page.component";

export function Component() {
  
  const { data, isLoading } = useListDepartmentQuery();

  return (
    <Page title="Departments">
      <DepartmentTable data={data} isLoading={isLoading} enableHeader={true} />
    </Page> 
  );
}


Component.displayName = "Department";
