import { Box, Text, Title } from '@mantine/core';

const ProfilePage = () => {
  return (
    <Box>
      <Title>Profile Page</Title>
      <Text>This is a protected route. You should land here after signing in.</Text>
    </Box>
  );
};

export default ProfilePage;
