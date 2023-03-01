import { Avatar, Badge, Box, Group, Paper, Skeleton, Stack, Title } from '@mantine/core';
import { Stat } from 'components';
import { useGetFollowedArtists, useGetMe, useGetMyPlaylists } from '../../api';
import useStyles from './ProfileCard.styles';

const IMG_SIZE = 180;

const ProfileCard = () => {
  const { classes } = useStyles();

  const { data: profile, isLoading: isMeLoading } = useGetMe();
  const { data: followedResponse, isLoading: isFollowedArtistsLoading } = useGetFollowedArtists();
  const { data: playlistsResponse, isLoading: isPlaylistsLoading } = useGetMyPlaylists();

  const isLoading = isMeLoading || isFollowedArtistsLoading || isPlaylistsLoading;

  return (
    <Paper p="xl" shadow="xs">
      <Group spacing="xl" position="apart">
        <Box>
          {isLoading ? (
            <Skeleton circle width={IMG_SIZE} height={IMG_SIZE} />
          ) : (
            profile?.images && (
              <Avatar
                src={profile.images[0].url}
                size={IMG_SIZE}
                alt={`${profile.display_name || 'User'} profile image`}
                radius={IMG_SIZE / 2}
              >
                {profile.display_name?.charAt(0)}
              </Avatar>
            )
          )}
        </Box>
        {isLoading ? (
          <Stack justify="center" sx={{ flex: 1, alignSelf: 'stretch' }}>
            <Skeleton height={36} />
            <Skeleton height={36} />
            <Skeleton height={36} />
          </Stack>
        ) : (
          profile && (
            <Stack
              justify="space-around"
              py="xs"
              align="flex-start"
              sx={{ flex: 1, alignSelf: 'stretch' }}
            >
              <Box>
                <Title size={56}>
                  <a
                    href={profile.external_urls.spotify}
                    rel="noreferrer external"
                    target="_blank"
                    className={classes.link}
                  >
                    {profile.display_name}
                  </a>
                </Title>
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
              <Group mt={8} spacing="xl">
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
