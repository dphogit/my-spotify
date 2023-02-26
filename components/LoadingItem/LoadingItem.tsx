import { Group, Skeleton } from '@mantine/core';

const LoadingItem = () => {
  return (
    <Group>
      <Skeleton circle height={50} width={50} />
      <Skeleton sx={{ flex: 1 }} height={50} />
    </Group>
  );
};

export default LoadingItem;
