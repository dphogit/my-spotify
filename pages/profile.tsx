import { Box, Button, Text, Title } from '@mantine/core';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { PageRoutes } from 'config/constants';

const useLogout = () => {
  const router = useRouter();

  return async () => {
    const { url } = await signOut({ redirect: false, callbackUrl: PageRoutes.Home });
    await router.push(url);
  };
};

const ProfilePage = () => {
  const logout = useLogout();

  return (
    <Box p="xl">
      <Title mb="xs">Profile Page</Title>
      <Text mb="md">This is a protected route. You should land here after signing in.</Text>
      <Button onClick={logout} size="md">
        Logout
      </Button>
    </Box>
  );
};

export default ProfilePage;
