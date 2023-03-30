import { Title } from "@mantine/core";
import { useEffect } from "react";
import { useQuery } from 'react-query';
import { useFetcher, useLoaderData } from "react-router-dom";
import { listCourse } from "../../api/graphql/courses/api.course";
import CourseTable from "../../common-components/Course/course.table";
import { GraphQLResult } from "../../types/result.type";

export async function loader() {
  return await new Promise((resolve, reject) => {
    listCourse().then((values) => {
      resolve({
        items: values.data?.listCourses?.items,
        nextToken: values.data?.listCourses?.nextToken,
        errors: values.errors,
        extentions: values.extensions
      })
    }).catch((err) => reject(err));
  })
}

export function Component() {

  const data = useLoaderData() as GraphQLResult;
  
  return (
    <>
      <Title order={1}>Course</Title>
      <CourseTable items={data.items} nextToken={data.nextToken} errors={data.errors} extenstions={data.extenstions} />
    </>
  );
}

Component.displayName = "Course";
