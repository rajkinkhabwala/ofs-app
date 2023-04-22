import { PropsWithChildren, useState } from 'react';
import {
  AppShell,
  Header,
  Footer,
  MediaQuery,
  Burger,
  useMantineTheme,
  Overlay,
} from '@mantine/core';
import { Outlet, json, useLocation } from 'react-router-dom';
import '../styles/_dashboard.scss'
import AdminNavBar from './navbars/admin.navbar';
import { useAuthenticator } from '@aws-amplify/ui-react';
import NavBarLayout from './navbars/navbar.layout';

function DashboardLayout() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const { user } = useAuthenticator((context) => [context.user]);
  const groups = user.getSignInUserSession()?.getAccessToken().payload["cognito:groups"];
  
  const location = useLocation();
  //console.log(location)

  if(groups === undefined){
    throw json(
        { message: "Contact Support." },
        { status: 401 }
    );
    
}

  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        
      <NavBarLayout burgerVisiblity={!opened} user={user}>
        {
          location.pathname.includes("/admin") ?
          <AdminNavBar /> :
          location.pathname.includes("/student/") ?
          <>Hello</> :
          <></>
        }
        
        </NavBarLayout>
      }
      footer={
        <Footer height={60} p="md" className="footer-section">
          © {new Date().getFullYear()} One Forest School. All rights reserved.
        </Footer>
      }
      header={
        <Header height={{ base: 50, md: 70 }} p="md">
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <img className='header-icon' src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt="Udemy" width="91" height="34" />
          </div>
        </Header>
      }
    >
      <Outlet context={user}/>
    </AppShell>
  );
}

export default DashboardLayout;
