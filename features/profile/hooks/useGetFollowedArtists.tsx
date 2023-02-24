import { useSession } from 'next-auth/react';
import SpotifyWebApi from 'spotify-web-api-js';
import useSWR from 'swr';
import { SWRCacheKeys } from 'config/constants';

// TODO Make reusable
const useGetFollowedArtists = () => {
  const { data: session } = useSession();

  return useSWR(session?.accessToken ? SWRCacheKeys.FollowedArtists : null, () => {
    const spotify = new SpotifyWebApi();
    const accessToken = session?.accessToken as string;
    spotify.setAccessToken(accessToken);

    return spotify.getFollowedArtists();
  });
};

export default useGetFollowedArtists;
