import { useSession } from 'next-auth/react';
import useSWR from 'swr';
import SpotifyWebApi from 'spotify-web-api-js';
import { SWRCacheKeys } from 'config/constants';

const useGetMe = () => {
  const { data: session } = useSession();

  return useSWR(session?.accessToken ? SWRCacheKeys.Me : null, () => {
    const spotify = new SpotifyWebApi();
    const accessToken = session?.accessToken as string;
    spotify.setAccessToken(accessToken);
    return spotify.getMe();
  });
};

export default useGetMe;
