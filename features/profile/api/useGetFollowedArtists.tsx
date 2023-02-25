import { SWRCacheKeys } from 'config/constants';
import { useSpotifyApi } from 'hooks';

const useGetFollowedArtists = () => {
  return useSpotifyApi<SpotifyApi.UsersFollowedArtistsResponse>({
    cacheKey: SWRCacheKeys.FollowedArtists,
    cb: ({ spotify }) => spotify.getFollowedArtists(),
  });
};

export default useGetFollowedArtists;
