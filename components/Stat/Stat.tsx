import { Box, Text } from '@mantine/core';

interface StatProps {
  label: string;
  value: string | number;
}

const Stat = ({ label, value }: StatProps) => {
  return (
    <Box>
      <Text ta="center" fw={700} color="spotify.7">
        {value}
      </Text>
      <Text color="dimmed" fw={600} size="xs">
        {label}
      </Text>
    </Box>
  );
};

export default Stat;
