import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { showNotification } from '@mantine/notifications';
import useLoginWithSpotify from './useLoginWithSpotify';
import { PageRoutes } from '../config/constants';

const useForceSignInOnRefreshTokenError = () => {
  const { data: session } = useSession();

  const router = useRouter();

  const loginWithSpotify = useLoginWithSpotify();

  useEffect(() => {
    const tryForceLoginWithSpotify = async () => {
      try {
        console.error('RefreshAccessTokenError, attempting to force sign in');
        await loginWithSpotify(); // Force sign in to hopefully resolve error
      } catch (error) {
        // console.error('Force sign in failed', error);
        await router.push(PageRoutes.Home);
        showNotification({
          color: 'red',
          title: 'Error',
          message: 'There was an error authenticating, please try to log in again.',
        });
      }
    };

    if (session?.error === 'RefreshAccessTokenError') {
      tryForceLoginWithSpotify();
    }
  }, [session]);
};

export default useForceSignInOnRefreshTokenError;
