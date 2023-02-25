import { useSession } from 'next-auth/react';
import useSWR, { SWRConfiguration } from 'swr';
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
  swrOptions?: SWRConfiguration;
}

// Wrapper to fetch from the spotify API with the access token using SWR
function useSpotifyApi<T>({ cb, cacheKey, swrOptions }: SpotifyApiHookOptions<T>) {
  const sessionObj = useSession();

  const fetcher = () => {
    const spotify = new SpotifyWebApi();
    const accessToken = sessionObj.data?.accessToken;

    if (!accessToken) throw new Error('No access token');
    spotify.setAccessToken(accessToken);

    return cb({ sessionObj, spotify });
  };

  return useSWR(sessionObj?.data?.accessToken ? cacheKey : null, fetcher, swrOptions);
}

export default useSpotifyApi;
