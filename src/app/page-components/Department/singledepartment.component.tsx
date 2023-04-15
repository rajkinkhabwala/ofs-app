import { useQuery } from "react-query";
import { Page } from "../../common-components/Page/Page.component";
import { getDepartment } from "../../api/graphql/departments/api.department";
import { useParams } from "react-router-dom";
import PageNotFound from "../../common-components/Errors/404/404.component";
import Loading from "../../common-components/Loading/loading.component";
import { Tabs } from "@mantine/core";
import { IconPhoto, IconMessageCircle, IconSettings } from "@tabler/icons-react";
import CourseTable from "../../common-components/Course/course.table";
import {CourseGraphQLResult} from "../../types/result.type";

export function Component(){
    const params = useParams()
    const {data, isLoading, isError} = useQuery(["department",params.id], () => getDepartment(params.id!))

    if(data?.data?.getDepartments === null || isError){
        return <PageNotFound />
    }

    if(isLoading){
        return <Loading />
    }

return(
<Page title={data?.data?.getDepartments?.department_name!}>

<Tabs defaultValue="courses">
      <Tabs.List>
        <Tabs.Tab value="courses">Courses</Tabs.Tab>
        <Tabs.Tab value="messages" icon={<IconMessageCircle size="0.8rem" />}>Messages</Tabs.Tab>
        <Tabs.Tab value="settings" icon={<IconSettings size="0.8rem" />}>Settings</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="courses" pt="xl">
        <CourseTable data={data?.data?.getDepartments?.Courses as any} isLoading={isLoading} enableHeader={false} />
      </Tabs.Panel>

      <Tabs.Panel value="messages" pt="xl">
        Messages tab content
      </Tabs.Panel>

      <Tabs.Panel value="settings" pt="xl">
        Settings tab content
      </Tabs.Panel>
    </Tabs>

</Page>
)
}

Component.displayName = "SingleDepartment"

