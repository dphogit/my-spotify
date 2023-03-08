import { signIn } from 'next-auth/react';
import { PageRoutes } from 'config/constants';

const useLoginWithSpotify = () => {
  return async () => {
    await signIn('spotify', { callbackUrl: PageRoutes.Profile });
  };
};

export default useLoginWithSpotify;
