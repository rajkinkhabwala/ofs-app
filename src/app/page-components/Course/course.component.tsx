import { Title } from "@mantine/core";
import { useQuery } from "react-query";
import { listCourse } from "../../api/graphql/courses/api.course";
import CourseTable from "../../common-components/Course/course.table";
import { ErrorComponent } from "../../common-components/Errors/Error/Error.component";
import { listCourses } from "../../../graphql/queries";

export function Component() {
  // const { data, isLoading, error, isError, refetch, isFetching, status } = useQuery(["course"], () =>
    const { data, isLoading, error, isError} = useQuery(["courses"], () =>
    listCourse(),
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
      <Title order={1}>Courses</Title>
      <CourseTable data={data} isLoading={isLoading} enableHeader={true} />
    </>
  );
}


Component.displayName = "Course";
