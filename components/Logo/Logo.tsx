import { Box, Center, Flex, Group, Stack, Title } from '@mantine/core';
import React from 'react';

const Dot = () => {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.colors.spotify[6],
        height: 10,
        width: 10,
        borderRadius: '50%',
      })}
    />
  );
};

const LogoIcon = () => {
  return (
    <Stack spacing={6}>
      <Center>
        <Dot />
      </Center>
      <Flex align="center" justify="space-between" gap={6}>
        <Dot />
        <Dot />
      </Flex>
    </Stack>
  );
};

const Logo = () => {
  return (
    <Group spacing="sm">
      <LogoIcon />
      <Title order={2} size="h3">
        Visualize My Spotify
      </Title>
    </Group>
  );
};

export default Logo;
