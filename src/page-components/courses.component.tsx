import { useEffect, useState } from "react"
import { listCourse } from "../app/api/graphql/courses/api.course"
import { Table } from "../common-components/Table.component";

export const Courses = () => {
    const [courseList, setCourseList] = useState('')

    useEffect(() => {
        listCourse().then((res: any) => {
            setCourseList(res?.data?.listCourses)
        })
    },[])

    return (
        <>
            {courseList && <Table list={courseList} />}
        </>
            
    )
}