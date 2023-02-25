import { SWRCacheKeys } from 'config/constants';
import { useSpotifyApi } from 'hooks';

const useGetMyPlaylists = () => {
  return useSpotifyApi<SpotifyApi.ListOfUsersPlaylistsResponse>({
    cacheKey: SWRCacheKeys.MyPlaylists,
    cb: ({ spotify }) => spotify.getUserPlaylists(undefined),
  });
};

export default useGetMyPlaylists;
