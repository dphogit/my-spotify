import { SWRCacheKeys } from 'config/constants';
import { useSpotifyApi } from 'hooks';
import UsersTopArtistsResponse = SpotifyApi.UsersTopArtistsResponse;

const useGetMyTopArtists = () => {
  return useSpotifyApi<UsersTopArtistsResponse>({
    cacheKey: SWRCacheKeys.MyTopArtists,
    cb: ({ spotify }) => spotify.getMyTopArtists({ limit: 10, time_range: 'long_term' }),
  });
};

export default useGetMyTopArtists;
