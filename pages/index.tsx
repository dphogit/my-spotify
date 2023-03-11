import { Anchor, Box, Button, Center, Stack, Text, Title } from '@mantine/core';
import { useErrorNotification, useLoginWithSpotify } from 'hooks';

export default function HomePage() {
  const loginWithSpotify = useLoginWithSpotify();

  const errorNotification = useErrorNotification();

  const handleLogin = async () => {
    try {
      await loginWithSpotify();
    } catch {
      errorNotification('Failed to login with Spotify');
    }
  };

  return (
    <Center h="90vh" pos="relative">
      <Stack spacing="xl" align="center">
        <Title ta="center">Visualize My Spotify</Title>
        <Button size="xl" radius="xl" onClick={handleLogin}>
          Login With Spotify
        </Button>
      </Stack>
      <Box pos="absolute" bottom={0}>
        <Text>
          This app is powered by the{' '}
          <Anchor
            href="https://developer.spotify.com/documentation/web-api/reference"
            target="_blank"
            rel="noreferrer external"
          >
            Spotify Web API
          </Anchor>{' '}
          and has no commercial affiliation with Spotify.
        </Text>
      </Box>
    </Center>
  );
}
