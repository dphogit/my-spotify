import React from 'react';
import { AppShell, AppShellProps, Group, Header } from '@mantine/core';
import { UserMenu } from './UserMenu';
import { Logo } from '../Logo';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children, ...props }: AppLayoutProps & AppShellProps) => {
  return (
    <AppShell
      padding={props.padding || 'xl'}
      styles={(theme) => ({
        root: { backgroundColor: theme.colors.dark[8] },
      })}
      header={
        <Header height={72} py="xs" px="xl">
          <Group h="100%" position="apart">
            <Logo />
            <Group>
              <UserMenu />
            </Group>
          </Group>
        </Header>
      }
      // TODO Add this back in when more pages are added
      // navbar={
      //   <Navbar width={{ base: 260 }} p="xl">
      //     <Navbar.Section grow>Links</Navbar.Section>
      //   </Navbar>
      // }
    >
      {children}
    </AppShell>
  );
};

export default AppLayout;
