import React from 'react';
import { AppShell, AppShellProps, Group, Header, Navbar, Title } from '@mantine/core';

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
        <Header height={60} py="xs" px="xl">
          <Group h="100%" position="apart">
            <Title order={2} size="h3">
              Visualize My Spotify
            </Title>
            <Group>User Menu</Group>
          </Group>
        </Header>
      }
      navbar={
        <Navbar width={{ base: 260 }} p="xl">
          <Navbar.Section grow>Links</Navbar.Section>
        </Navbar>
      }
    >
      {children}
    </AppShell>
  );
};

export default AppLayout;
