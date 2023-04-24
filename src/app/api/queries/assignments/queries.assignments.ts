import { useQuery } from "react-query";
import { getAssignment, listAssignment } from "../../graphql/assignments/api.assignment";

export function useListAssignmentQuery() {
return useQuery(["assignments"], () =>
    listAssignment(),
    {
    refetchOnWindowFocus: false,
    }
  );
}

export function useAssignmentQuery(id: string) {
  return useQuery(["assignment",id], () => getAssignment(id));
}

