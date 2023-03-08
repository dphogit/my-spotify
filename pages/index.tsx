import { Anchor, Box, Button, Center, Stack, Text, Title } from '@mantine/core';
import { useLoginWithSpotify } from 'hooks';

export default function HomePage() {
  const loginWithSpotify = useLoginWithSpotify();

  return (
    <Center h="90vh" pos="relative">
      <Stack spacing="xl" align="center">
        <Title ta="center">Visualize My Spotify</Title>
        <Button size="xl" radius="xl" onClick={loginWithSpotify}>
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
