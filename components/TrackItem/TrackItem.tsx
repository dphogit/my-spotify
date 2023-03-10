import Image from 'next/image';
import { Box, Group, Text } from '@mantine/core';
import { formatPlayingTime } from 'utils/spotify';
import TrackObjectFull = SpotifyApi.TrackObjectFull;
import useStyles from './TrackItem.styles';

interface TrackItemProps {
  track: TrackObjectFull;
}

// FIXME Handle overflow states
const TrackItem = ({ track }: TrackItemProps) => {
  const { classes } = useStyles();

  const artistNamesCommaSeparated = track.artists.map((artist) => artist.name).join(', ');

  return (
    <Group key={track.id} position="apart">
      <Group>
        <Image src={track.album.images[0].url} alt={track.album.name} height={50} width={50} />
        <Box sx={{ minWidth: 0 }}>
          <Text color="white" fw={700} fz="sm" truncate mb={2}>
            {track.name}
          </Text>
          <Text fz="xs" color="dimmed" fw={600} truncate>
            <span>{artistNamesCommaSeparated}</span>
            <span className={classes.cdot}>•</span>
            <span>{track.album.name}</span>
          </Text>
        </Box>
      </Group>
      <Text fz="xs" color="dimmed" fw={600}>
        {formatPlayingTime(track.duration_ms)}
      </Text>
    </Group>
  );
};

export default TrackItem;
