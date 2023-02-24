import { Button, Text, Title } from '@mantine/core';
import { useSession } from 'next-auth/react';
import { AppLayout } from 'components';
import { useLogout } from 'hooks';

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
