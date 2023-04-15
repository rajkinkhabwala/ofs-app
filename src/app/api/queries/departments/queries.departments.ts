import { useQuery } from "react-query";
import { getDepartment, listDepartment } from "../../graphql/departments/api.department";

export function useListDepartmentQuery() {
return useQuery(["departments"], () =>
    listDepartment(),
    {
    refetchOnWindowFocus: false,
    }
  );
}

export function useDepartmentQuery(id: string) {
  return useQuery(["department",id], () => getDepartment(id));
}
