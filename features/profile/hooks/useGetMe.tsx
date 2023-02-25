import { SWRCacheKeys } from 'config/constants';
import { useSpotifyApi } from 'hooks';

const useGetMe = () => {
  return useSpotifyApi<SpotifyApi.CurrentUsersProfileResponse>({
    cacheKey: SWRCacheKeys.Me,
    cb: ({ spotify }) => spotify.getMe(),
  });
};

export default useGetMe;
