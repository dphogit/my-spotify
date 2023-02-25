import { Paper, Stack, Title } from '@mantine/core';
import { ArtistItem } from 'components';
import { useGetMyTopArtists } from '../../api';

const TopArtistsCard = () => {
  const { data } = useGetMyTopArtists();

  return (
    <Paper shadow="sm" p={32}>
      <Title order={2}>All Time Top Artists</Title>
      {data && (
        <Stack spacing={32} mt={32}>
          {data.items.map((artist) => (
            <ArtistItem key={artist.id} artist={artist} />
          ))}
        </Stack>
      )}
    </Paper>
  );
};

export default TopArtistsCard;
