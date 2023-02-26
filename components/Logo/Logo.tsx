import { Group, Title } from '@mantine/core';
import React from 'react';
import Image from 'next/image';
import IconSrc from 'public/assets/icon.png';

const Logo = () => {
  return (
    <Group spacing="sm">
      <Image src={IconSrc} alt="Visualize My Spotify Icon" height={24} width={24} />
      <Title order={2} size="h3">
        Visualize My Spotify
      </Title>
    </Group>
  );
};

export default Logo;
