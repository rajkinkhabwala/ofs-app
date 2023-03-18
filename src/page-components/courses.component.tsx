import { useEffect, useState } from "react"
import { getCourse, listCourse } from "../app/api/graphql/courses/api.course"
import { Text } from '@mantine/core';
import sortBy from 'lodash/sortBy';
import { DataTable, DataTableSortStatus } from 'mantine-datatable';
import { AppShell, Navbar, Header } from '@mantine/core';
import { Table } from "../common-components/Table.component";

export const Courses = () => {
    const [courseList, setCourseList] = useState('')

    useEffect(() => {
        listCourse().then((res: any) => {
            setCourseList(res?.data?.listCourses)
        })
    },[])

    return (
        <AppShell
              padding="md"
              navbar={<Navbar width={{ base: 300 }} height={500} p="xs">{/* Navbar content */}</Navbar>}
              header={<Header height={60} p="xs">{/* Header content */}</Header>}
              styles={(theme) => ({
              main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
            })}
        >
            <Table list={courseList} />
        </AppShell>
    )
}