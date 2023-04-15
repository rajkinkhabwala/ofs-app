import { useQuery } from "react-query";
import { Page } from "../../common-components/Page/Page.component";
import { useParams } from "react-router-dom";
import { getUser } from "../../api/graphql/users/api.user";
import { Tabs } from "@mantine/core";
import { IconPhoto, IconMessageCircle, IconSettings } from "@tabler/icons-react";

export function Component() {

    const params = useParams();
    const {data , isLoading, error, isError, isFetching, status } = useQuery(['users', params.id], () => getUser(params.id!))

    console.log(data)
return(
<>
      {
        isError ?
        <>
        
        {error}
        </>
      : status === "success" ?
      <>
      <Page title={data.data?.getUsers?.name!}>

      <Tabs defaultValue="gallery">
      <Tabs.List>
        <Tabs.Tab value="gallery" icon={<IconPhoto size="0.8rem" />}>Gallery</Tabs.Tab>
        <Tabs.Tab value="messages" icon={<IconMessageCircle size="0.8rem" />}>Messages</Tabs.Tab>
        <Tabs.Tab value="settings" icon={<IconSettings size="0.8rem" />}>Settings</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="gallery" pt="xl">
        Gallery tab content
      </Tabs.Panel>

      <Tabs.Panel value="messages" pt="xl">
        Messages tab content
      </Tabs.Panel>

      <Tabs.Panel value="settings" pt="xl">
        Settings tab content
      </Tabs.Panel>
    </Tabs>
        
      </Page>
      
      </>
       :
      <>
      
      </>
      }
    </>
);
}



Component.displayName = "SingleUser"