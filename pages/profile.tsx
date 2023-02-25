import { Box, Container, Group, Paper } from '@mantine/core';
import { AppLayout } from 'components';
import { ProfileCard, TopTracksCard } from 'features/profile';

const ProfilePage = () => {
  return (
    <AppLayout>
      <Container size="lg" mt="xl">
        <ProfileCard />
        <Group grow align="flex-start" spacing="xl" mt="xl">
          <Box>
            <Paper p="xl" shadow="xs">
              Top Artists
            </Paper>
          </Box>
          <TopTracksCard />
        </Group>
      </Container>
    </AppLayout>
  );
};

export default ProfilePage;
