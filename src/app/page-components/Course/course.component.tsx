import { Title } from "@mantine/core";
import { useQuery } from "react-query";
import { listCourse } from "../../api/graphql/courses/api.course";
import CourseTable from "../../common-components/Course/course.table";

export function Component() {
  const { data, isLoading, error, isError, refetch, isFetching, status } = useQuery(["course"], () =>
    listCourse(),
    {
    refetchOnWindowFocus: false,
    }
  );

  console.log(data)
  return (
    <>
      <Title order={1}>Courses</Title>
      {
        isError ?
        <>
        {error}
        </>
      : status === "success" ?
      <CourseTable items={data?.items} isLoading={isLoading} refetch={refetch}/> :
      <>
      <CourseTable items={[]} isLoading={isLoading || isFetching} />
      </>
      }
      
    </>
  );
}


Component.displayName = "Course";
