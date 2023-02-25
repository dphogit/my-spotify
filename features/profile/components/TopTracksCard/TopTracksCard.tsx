import { Box, Paper, Stack, Title } from '@mantine/core';
import useGetMyTopTracks from '../../api/useGetMyTopTracks';

const TopTracksCard = () => {
  const { data } = useGetMyTopTracks();

  return (
    <Paper p="xl" shadow="xs">
      <Title order={2}>Top Tracks</Title>
      {data && (
        <Stack spacing="md" mt="md">
          {data.items.map((track) => (
            <Box key={track.id}>{track.name}</Box>
          ))}
        </Stack>
      )}
    </Paper>
  );
};

export default TopTracksCard;
