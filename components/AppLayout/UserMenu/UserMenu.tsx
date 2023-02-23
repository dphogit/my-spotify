import React from 'react';
import { Avatar, Box, Group, Menu, Skeleton, Text, UnstyledButton } from '@mantine/core';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { IconLogout, IconUserCircle } from '@tabler/icons';

const AVATAR_SIZE = 40;

const UserMenu = () => {
  const { data: session, status } = useSession();

  const renderMenuTarget = (): React.ReactNode => {
    if (status === 'loading') {
      return (
        <>
          <Skeleton circle height={AVATAR_SIZE} width={AVATAR_SIZE} />
          <Skeleton height={20} width={100} />
        </>
      );
    }

    if (session?.user?.image) {
      return (
        <>
          <Image
            src={session.user.image}
            alt={`${session.user.name || 'User'} Profile Picture`}
            width={AVATAR_SIZE}
            height={AVATAR_SIZE}
            style={{
              borderRadius: '50%',
              cursor: 'pointer',
            }}
          />
          <Box>
            <Text fw={600}>{session.user.name}</Text>
            <Text color="dimmed" size="xs">
              {session.user.email}
            </Text>
          </Box>
        </>
      );
    }

    return (
      <>
        <Avatar size={AVATAR_SIZE} radius="xl" sx={{ cursor: 'pointer' }}>
          {session?.user?.name?.charAt(0)}
        </Avatar>
        <Text>{session?.user?.name}</Text>
      </>
    );
  };

  return (
    <Menu shadow="lg" disabled={status === 'loading'} position="bottom-end" width={200}>
      <Menu.Target>
        <UnstyledButton sx={{ '&:hover': { opacity: 0.9 } }}>
          <Group spacing="xs">{renderMenuTarget()}</Group>
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item icon={<IconUserCircle size={20} />}>Profile</Menu.Item>
        <Menu.Item icon={<IconLogout size={20} />}>Sign out</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default UserMenu;
