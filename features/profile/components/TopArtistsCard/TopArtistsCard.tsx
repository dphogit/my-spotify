import { Paper, Stack, Title } from '@mantine/core';
import { ArtistItem } from 'components';
import { useGetMyTopArtists } from '../../api';
import { LoadingGroup } from '../LoadingGroup';

const TopArtistsCard = () => {
  const { data, isLoading } = useGetMyTopArtists();

  return (
    <Paper shadow="sm" p={32}>
      <Title order={2}>All Time Top Artists</Title>
      <Stack spacing={32} mt={32}>
        {isLoading ? (
          <LoadingGroup />
        ) : (
          data && data.items.map((artist) => <ArtistItem key={artist.id} artist={artist} />)
        )}
      </Stack>
    </Paper>
  );
};

export default TopArtistsCard;
