import { useSpotifyApi } from 'hooks';
import { SWRCacheKeys } from 'config/constants';
import UsersTopTracksResponse = SpotifyApi.UsersTopTracksResponse;

const useGetMyTopTracks = () => {
  return useSpotifyApi<UsersTopTracksResponse>({
    cacheKey: SWRCacheKeys.MyTopTracks,
    cb: ({ spotify }) =>
      spotify.getMyTopTracks({
        limit: 10,
        time_range: 'long_term',
      }),
  });
};

export default useGetMyTopTracks;
