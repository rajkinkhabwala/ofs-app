import CourseTable from "../../common-components/Course/course.table";
import { useListCourseQuery } from "../../api/queries/courses/queries.courses";
import { Page } from "../../common-components/Page/Page.component";
import { json } from "react-router-dom";

export function Component() {
    const { data, isLoading, isError, error} = useListCourseQuery();

    if(isError){
      json(
        {message: error},
        {status: 500}
      )
    }

  return (
    <Page title="Courses">
      <CourseTable data={data} isLoading={isLoading} enableHeader={true} />
    </Page>
  );
}


Component.displayName = "Course";
