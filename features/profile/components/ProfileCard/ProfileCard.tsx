import { Avatar, Badge, Box, Group, Paper, Skeleton, Stack, Title } from '@mantine/core';
import Image from 'next/image';
import { useGetFollowedArtists, useGetMe, useGetMyPlaylists } from '../../hooks';
import { Stat } from '../../../../components';

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
                {profile.followers && <Stat label="Followers" value={profile.followers.total} />}
                {followedResponse?.artists.total !== undefined && (
                  <Stat label="Following" value={followedResponse.artists.total} />
                )}
                {playlistsResponse && <Stat label="Playlists" value={playlistsResponse.total} />}
              </Group>
            </Stack>
          )
        )}
      </Group>
    </Paper>
  );
};

export default ProfileCard;
