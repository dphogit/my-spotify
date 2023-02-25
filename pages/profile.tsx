import { Container, Group } from '@mantine/core';
import { AppLayout } from 'components';
import { ProfileCard, TopArtistsCard, TopTracksCard } from 'features/profile';

const ProfilePage = () => {
  return (
    <AppLayout>
      <Container size="lg" mt="xl">
        <ProfileCard />
        <Group grow align="flex-start" spacing="xl" mt="xl">
          <TopArtistsCard />
          <TopTracksCard />
        </Group>
      </Container>
    </AppLayout>
  );
};

export default ProfilePage;
