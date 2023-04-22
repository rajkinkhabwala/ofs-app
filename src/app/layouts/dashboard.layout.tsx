import { useState } from 'react';
import {
  AppShell,
  Header,
  Footer,
  MediaQuery,
  Burger,
  useMantineTheme,
} from '@mantine/core';
import { Outlet } from 'react-router-dom';
import '../styles/_dashboard.scss'
import AdminNavBar from './navbars/admin.navbar';
import { useAuthenticator } from '@aws-amplify/ui-react';

function DashboardLayout() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const { user } = useAuthenticator((context) => [context.user]);
  const groups = user.getSignInUserSession()?.getAccessToken().payload["cognito:groups"];
  
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
          
        <AdminNavBar burgerVisiblity={!opened} user={user}/>
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
        <Outlet />
      </AppShell>
    );
  }


export default DashboardLayout;
