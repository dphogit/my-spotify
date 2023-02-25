import { Paper, Stack, Title } from '@mantine/core';
import { TrackItem } from 'components';
import { useGetMyTopTracks } from '../../api';
import { LoadingGroup } from '../LoadingGroup';

const TopTracksCard = () => {
  const { data, isLoading } = useGetMyTopTracks();

  return (
    <Paper p={32} shadow="xs">
      <Title order={2}>All Time Top Tracks</Title>
      <Stack spacing={32} mt={32}>
        {isLoading ? (
          <LoadingGroup />
        ) : (
          data && data.items.map((track) => <TrackItem key={track.id} track={track} />)
        )}
      </Stack>
    </Paper>
  );
};

export default TopTracksCard;
