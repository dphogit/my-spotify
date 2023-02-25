import { useSession } from 'next-auth/react';
import useSWR from 'swr';
import SpotifyWebApi from 'spotify-web-api-js';

export interface SpotifyApiHookOptions<T> {
  cacheKey: string;
  cb: ({
    sessionObj,
    spotify,
  }: {
    sessionObj: ReturnType<typeof useSession>;
    spotify: SpotifyWebApi.SpotifyWebApiJs;
  }) => Promise<T>;
}

// Wrapper to fetch from the spotify API with the access token using SWR
function useSpotifyApi<T>({ cb, cacheKey }: SpotifyApiHookOptions<T>) {
  const sessionObj = useSession();

  return useSWR(sessionObj?.data?.accessToken ? cacheKey : null, () => {
    const spotify = new SpotifyWebApi();
    const accessToken = sessionObj.data?.accessToken;

    if (!accessToken) throw new Error('No access token');
    spotify.setAccessToken(accessToken);

    return cb({ sessionObj, spotify });
  });
}

export default useSpotifyApi;
