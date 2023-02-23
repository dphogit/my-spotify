import { Box, Button, Text, Title } from '@mantine/core';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { PageRoutes } from 'config/constants';
import { AppLayout } from '../components';

const useLogout = () => {
  const router = useRouter();

  return async () => {
    const { url } = await signOut({ redirect: false, callbackUrl: PageRoutes.Home });
    await router.push(url);
  };
};

const ProfilePage = () => {
  const { data: session, status } = useSession();

  const logout = useLogout();

  return (
    <AppLayout>
      {status === 'loading' && <Title>Loading Profile Page...</Title>}
      {session && (
        <>
          <Title mb="xs">Welcome {session.user?.name}!</Title>
          <Text mb="md">This is a protected route. You should land here after signing in.</Text>
          <Button onClick={logout} size="md">
            Logout
          </Button>
        </>
      )}
    </AppLayout>
  );
};

export default ProfilePage;
