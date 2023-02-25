import { Paper, Stack, Title } from '@mantine/core';
import { useGetMyTopArtists } from '../../api';

const TopArtistsCard = () => {
  const { data } = useGetMyTopArtists();

  return (
    <Paper shadow="sm" p={32}>
      <Title order={2}>All Time Top Artists</Title>
      {data && (
        <Stack spacing={32} mt={32}>
          {data.items.map((track) => (
            <div key={track.id}>{track.name}</div>
          ))}
        </Stack>
      )}
    </Paper>
  );
};

export default TopArtistsCard;
