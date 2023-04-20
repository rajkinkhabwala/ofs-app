import { createStyles, Navbar, getStylesRef, rem, Anchor } from '@mantine/core';
import {
  IconLogout,
} from '@tabler/icons-react';
import { PropsWithChildren } from 'react';
import {AmplifyUser} from "@aws-amplify/ui";

const useStyles = createStyles((theme) => ({
  header: {
    paddingBottom: theme.spacing.md,
    marginBottom: `calc(${theme.spacing.md} * 1.5)`,
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
  },

  footer: {
    paddingTop: theme.spacing.xs,
    marginTop: theme.spacing.xs,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
  },

  link: {
    ...theme.fn.focusStyles(),
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    fontSize: theme.fontSizes.sm,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,

      [`& .${getStylesRef('icon')}`]: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      },
    },
  },

  linkIcon: {
    ref: getStylesRef('icon'),
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
    marginRight: theme.spacing.sm,
  },
}));



interface INavBar {
    burgerVisiblity: boolean,
    user?: AmplifyUser
}

export function NavBarLayout({burgerVisiblity, user, children} : PropsWithChildren<INavBar>) {
  const { classes} = useStyles();

  

  return (
    <Navbar p="md" hiddenBreakpoint="sm" hidden={!burgerVisiblity} width={{ sm: 200, lg: 300 }} className="navbar-template">
      <Navbar.Section grow>
        {children}
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>        
        <Anchor className={classes.link} onClick={() => {
          user?.signOut();
          window.location.reload();
        }}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </Anchor>
      </Navbar.Section>
    </Navbar>
  );
}

export default NavBarLayout