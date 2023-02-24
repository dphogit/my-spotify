import { Box, Group, Paper, Skeleton, Stack } from '@mantine/core';

const ProfileCard = () => {
  // const { data, isLoading } = useGetMe();

  return (
    <Paper p="xl">
      <Group spacing="xl" position="apart">
        <Box>
          <Skeleton circle width={150} height={150} />
        </Box>
        <Stack spacing="md" sx={{ flex: 1, alignSelf: 'stretch' }}>
          <Box>
            <Skeleton height={36} />
          </Box>
          <Box>
            <Skeleton height={36} />
          </Box>
          <Box>
            <Skeleton height={36} />
          </Box>
        </Stack>
      </Group>
    </Paper>
  );
};

export default ProfileCard;
