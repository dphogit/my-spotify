import { Paper, Stack, Title } from '@mantine/core';
import { TrackItem } from 'components';
import { useGetMyTopTracks } from '../../api';

// TODO Loading state
const TopTracksCard = () => {
  const { data } = useGetMyTopTracks();

  return (
    <Paper p={32} shadow="xs">
      <Title order={2}>All Time Top Tracks</Title>
      {data && (
        <Stack spacing={32} mt={32}>
          {data.items.map((track) => (
            <TrackItem key={track.id} track={track} />
          ))}
        </Stack>
      )}
    </Paper>
  );
};

export default TopTracksCard;
