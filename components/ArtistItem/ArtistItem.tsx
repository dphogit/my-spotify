import Image from 'next/image';
import { Group, Text } from '@mantine/core';
import { capitalizePhrase } from 'utils/strings';
import ArtistObjectFull = SpotifyApi.ArtistObjectFull;

interface ArtistItemProps {
  artist: ArtistObjectFull;
}

// FIXME Handle overflow states
const ArtistItem = ({ artist }: ArtistItemProps) => {
  const firstThreeGenresCommaSeparated =
    artist.genres.length > 0
      ? artist.genres.slice(0, 3).map(capitalizePhrase).join(', ')
      : 'No Genres Found';

  return (
    <Group>
      <Image
        src={artist.images[0].url}
        alt={artist.name}
        height={50}
        width={50}
        style={{ borderRadius: '50%' }}
      />
      <div>
        <Text color="white" fw={700} fz="sm" truncate mb={2}>
          {artist.name}
        </Text>
        <Text fz="xs" color="dimmed" fw={600}>
          {firstThreeGenresCommaSeparated}
        </Text>
      </div>
    </Group>
  );
};

export default ArtistItem;
