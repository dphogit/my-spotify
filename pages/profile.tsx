import { Box, Container, Group, Paper } from '@mantine/core';
import { AppLayout } from 'components';
import { ProfileCard } from 'features/profile';

const ProfilePage = () => {
  return (
    <AppLayout>
      <Container size="lg">
        <Box mb="xl">
          <ProfileCard />
        </Box>
        <Group grow align="flex-start" spacing="xl">
          <Box>
            <Paper p="xl">Top Tracks</Paper>
          </Box>
          <Box>
            <Paper p="xl">Top Artists</Paper>
          </Box>
        </Group>
      </Container>
    </AppLayout>
  );
};

export default ProfilePage;
