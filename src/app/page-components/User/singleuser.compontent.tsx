import { useQuery } from "react-query";
import { Page } from "../../common-components/Page/Page.component";
import { useParams } from "react-router-dom";
import { getUser } from "../../api/graphql/users/api.user";
import { Tabs } from "@mantine/core";
import { IconPhoto, IconMessageCircle, IconSettings } from "@tabler/icons-react";
import '../../styles/_single-pages.scss'

export function Component() {

  const params = useParams();
  const { data, isLoading, error, isError, isFetching, status } = useQuery(['users', params.id], () => getUser(params.id!))

  let user_data = data?.data?.getUsers

  console.log(data)
  return (
    <>
      {
        isError ?
          <>

            {error}
          </>
          : status === "success" ?
            <div className="single-page-template">
              <Page title={data.data?.getUsers?.name!}>

                <Tabs defaultValue="gallery">
                  <div className="nav-container">
                    <Tabs.List>
                      <Tabs.Tab value="gallery" icon={<IconPhoto size="0.8rem" />}>User Information</Tabs.Tab>
                      <Tabs.Tab value="messages" icon={<IconMessageCircle size="0.8rem" />}>Messages</Tabs.Tab>
                      <Tabs.Tab value="settings" icon={<IconSettings size="0.8rem" />}>Settings</Tabs.Tab>
                    </Tabs.List>
                  </div>

                  <Tabs.Panel value="gallery" pt="xl">
                    <div className="tab-detail-container">
                      <div className="info-item">
                        <div className="title">Email</div>
                        <div className="value">{user_data?.email}</div>
                      </div>

                      <div className="info-item">
                        <div className="title">Contact</div>
                        <div className="value">{user_data?.phone}</div>
                      </div>

                      <div className="info-item">
                        <div className="title">Address</div>
                        <div className="value">{user_data?.address || 'NA'}</div>
                      </div>

                      <div className="info-item">
                        <div className="title">User created </div>
                        <div className="value">{user_data?.createdAt}</div>
                      </div>

                      <div className="info-item">
                        <div className="title">User updated </div>
                        <div className="value">{user_data?.updatedAt}</div>
                      </div>
                    </div>
                  </Tabs.Panel>

                  <Tabs.Panel value="messages" pt="xl">
                    Messages tab content
                  </Tabs.Panel>

                  <Tabs.Panel value="settings" pt="xl">
                    Settings tab content
                  </Tabs.Panel>
                </Tabs>

              </Page>

            </div>
            :
            <>

            </>
      }
    </>
  );
}



Component.displayName = "SingleUser"