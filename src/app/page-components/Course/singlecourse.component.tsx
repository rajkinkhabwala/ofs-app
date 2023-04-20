import { useQuery } from "react-query";
import { Page } from "../../common-components/Page/Page.component";
import { getCourse } from "../../api/graphql/courses/api.course";
import { useParams } from "react-router-dom";
import PageNotFound from "../../common-components/Errors/404/404.component";
import Loading from "../../common-components/Loading/loading.component";
import { Tabs } from "@mantine/core";
import { IconPhoto, IconMessageCircle, IconSettings } from "@tabler/icons-react";
import React from "react";
import { Calendar } from "@mantine/dates";
const EditCourse = React.lazy(() => import("../../common-components/Course/editcourse.page"));

export function Component(){
    const params = useParams()
    const {data, isLoading, isError, refetch} = useQuery(["course",params.id], () => getCourse(params.id!))

    if(data?.data?.getCourses === null || isError){
        return <PageNotFound />
    }

    if(isLoading){
        return <Loading />
    }

    
return(
<Page title={data?.data?.getCourses?.course_name!}>

<Tabs defaultValue="edit">
      <Tabs.List>
        <Tabs.Tab value="edit" icon={<IconPhoto size="0.8rem" />}>Edit</Tabs.Tab>
        <Tabs.Tab value="messages" icon={<IconMessageCircle size="0.8rem" />}>Messages</Tabs.Tab>
        <Tabs.Tab value="settings" icon={<IconSettings size="0.8rem" />}>Settings</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="edit" pt="xl">
        {/* <CourseTable items={data} isLoading={isLoading} refetch={refetch}/> */}

        <EditCourse record={data}/>

      </Tabs.Panel>

      <Tabs.Panel value="messages" pt="xl">
        <Calendar size="xl" />
      </Tabs.Panel>

      <Tabs.Panel value="settings" pt="xl">
        Settings tab content
      </Tabs.Panel>
    </Tabs>

</Page>
)
}

Component.displayName = "SingleCourse"

