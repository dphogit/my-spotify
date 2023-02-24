import useSWR from 'swr';
import { useSession } from 'next-auth/react';
import SpotifyWebApi from 'spotify-web-api-js';
import { SWRCacheKeys } from '../../../config/constants';

const useGetMyPlaylists = () => {
  const { data: session } = useSession();

  return useSWR(session?.accessToken ? SWRCacheKeys.MyPlaylists : null, () => {
    const spotify = new SpotifyWebApi();
    const accessToken = session?.accessToken as string;
    spotify.setAccessToken(accessToken);
    return spotify.getUserPlaylists(undefined);
  });
};

export default useGetMyPlaylists;
