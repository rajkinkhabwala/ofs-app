import { useState } from 'react';
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Anchor,
} from '@mantine/core';
import { SegmentedControl, createStyles, getStylesRef, rem } from '@mantine/core';
import { Outlet, useNavigate } from 'react-router-dom';
import '../styles/_dashboard.scss'
import { IconLogout } from '@tabler/icons-react';

function DashboardLayout() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const [active, setActive] = useState('Department');
  const navigate = useNavigate();


  const tabs = [
    { link: '/department', label: 'Department'},
    { link: '/course', label: 'Course'},
    { link: '/course/assignment', label: 'Assignment'},

  ]
  
  const links = tabs.map((item) => (
    <a
      className={item.label === active ? 'link active-link' : 'link'}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        // event.preventDefault();
        setActive(item.label);
        navigate(item.link)
      }}
    >
      {/* <item.icon className='' stroke={1.5} /> */}
      <span>{item.label}</span>
    </a>
  ));

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
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }} className="navbar-template">
            {/* <Text weight={500} size="sm" className='' color="dimmed" mb="xs">
              bgluesticker@mantine.dev
            </Text> */}
            <Navbar.Section grow mt="xl">
              {links}
            </Navbar.Section>

            <Navbar.Section className='sidebar-bottom'>
              {/* <a href="#" className='' onClick={(event) => event.preventDefault()}>
                <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
                <span>Change account</span>
              </a> */}

              <Anchor href="#" className='logout-option' onClick={(event) => event.preventDefault()}>
                <IconLogout className='' stroke={1.5} />
                <span>Logout</span>
              </Anchor>
      </Navbar.Section>
        </Navbar>
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