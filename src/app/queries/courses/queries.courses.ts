import { useQuery } from "react-query";
import { getCourse, listCourse } from "../../api/graphql/courses/api.course";

export function useListCourseQuery() {
return useQuery(["courses"], () =>
    listCourse(),
    {
    refetchOnWindowFocus: false,
    }
  );
}

export function useCourseQuery(id: string) {
  return useQuery(["course",id], () => getCourse(id));
}

