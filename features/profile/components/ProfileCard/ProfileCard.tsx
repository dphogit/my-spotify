import { Avatar, Badge, Box, Group, Paper, Skeleton, Stack, Text, Title } from '@mantine/core';
import Image from 'next/image';
import { useGetFollowedArtists, useGetMe, useGetMyPlaylists } from '../../hooks';

const IMG_SIZE = 180;

const ProfileCard = () => {
  const { data: profile, isLoading: isMeLoading } = useGetMe();
  const { data: followedResponse, isLoading: isFollowedArtistsLoading } = useGetFollowedArtists();
  const { data: playlistsResponse, isLoading: isPlaylistsLoading } = useGetMyPlaylists();

  const isLoading = isMeLoading || isFollowedArtistsLoading || isPlaylistsLoading;

  return (
    <Paper p="xl">
      <Group spacing="xl" position="apart">
        <Box>
          {isLoading ? (
            <Skeleton circle width={IMG_SIZE} height={IMG_SIZE} />
          ) : profile?.images ? (
            <Image
              src={profile.images[0].url}
              alt={`${profile.display_name || 'User'} profile image`}
              width={IMG_SIZE}
              height={IMG_SIZE}
              style={{ borderRadius: '50%' }}
            />
          ) : (
            <Avatar size={IMG_SIZE} radius={IMG_SIZE / 2} />
          )}
        </Box>
        {isLoading ? (
          <Stack justify="space-between" sx={{ flex: 1, alignSelf: 'stretch' }}>
            <Skeleton height={36} />
            <Skeleton height={36} />
            <Skeleton height={36} />
          </Stack>
        ) : (
          profile && (
            <Stack justify="space-around" align="flex-start" sx={{ flex: 1, alignSelf: 'stretch' }}>
              <Box>
                <Title size={56}>{profile.display_name}</Title>
                {profile.product === 'premium' ? (
                  <Badge variant="filled" color="spotify.7">
                    Spotify Premium
                  </Badge>
                ) : (
                  <Badge variant="filled" color="gray">
                    Free Account
                  </Badge>
                )}
              </Box>
              <Group mt="xs" spacing="xl">
                {profile.followers && (
                  <Box>
                    <Text ta="center" fw={700} color="spotify.7">
                      {profile.followers.total}
                    </Text>
                    <Text color="dimmed" fw={600} size="xs">
                      FOLLOWERS
                    </Text>
                  </Box>
                )}
                {followedResponse?.artists && (
                  <Box>
                    <Text ta="center" fw={700} color="spotify.7">
                      {followedResponse.artists.total}
                    </Text>
                    <Text color="dimmed" fw={600} size="xs">
                      FOLLOWING
                    </Text>
                  </Box>
                )}
                {playlistsResponse && (
                  <Box>
                    <Text ta="center" fw={700} color="spotify.7">
                      {playlistsResponse.total}
                    </Text>
                    <Text color="dimmed" fw={600} size="xs">
                      PLAYLISTS
                    </Text>
                  </Box>
                )}
              </Group>
            </Stack>
          )
        )}
      </Group>
    </Paper>
  );
};

export default ProfileCard;
