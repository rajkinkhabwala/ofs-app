import { useQuery } from "react-query";
import { getAssignment, listAssignment } from "../../graphql/assignments/api.assignment";

export function useListAssignmentQuery() {
return useQuery(["courses"], () =>
    listAssignment(),
    {
    refetchOnWindowFocus: false,
    }
  );
}

export function useAssignmentQuery(id: string) {
  return useQuery(["course",id], () => getAssignment(id));
}

