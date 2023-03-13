import React from 'react';
import { AppShell, AppShellProps, Group, Header } from '@mantine/core';
import { useForceSignInOnRefreshTokenError } from 'hooks';
import { UserMenu } from './UserMenu';
import { Logo } from '../Logo';
import { Sidebar } from './Sidebar';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children, ...props }: AppLayoutProps & AppShellProps) => {
  // Intended to be the root layout for all authenticated pages
  useForceSignInOnRefreshTokenError();

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
      navbar={<Sidebar />}
    >
      {children}
    </AppShell>
  );
};

export default AppLayout;
