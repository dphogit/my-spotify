import { useRouter } from 'next/router';
import { signOut } from 'next-auth/react';
import { PageRoutes } from 'config/constants';

const useLogout = () => {
  const router = useRouter();

  return async () => {
    const { url } = await signOut({ redirect: false, callbackUrl: PageRoutes.Home });
    await router.push(url);
  };
};

export default useLogout;
