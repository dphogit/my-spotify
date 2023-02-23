import NextAuth, { NextAuthOptions } from 'next-auth';
import SpotifyProvider from 'next-auth/providers/spotify';
import { PageRoutes } from '../../../config/constants';

const spotifyClientId = process.env.SPOTIFY_CLIENT_ID;
const spotifyClientSecret = process.env.SPOTIFY_CLIENT_SECRET;

if (!spotifyClientId || !spotifyClientSecret) {
  throw new Error('Spotify client id or secret missing');
}

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: PageRoutes.Home,
  },
  providers: [
    SpotifyProvider({
      clientId: spotifyClientId,
      clientSecret: spotifyClientSecret,
      authorization: {
        url: 'https://accounts.spotify.com/authorize',
        params: {
          scope: 'user-read-private user-read-email user-top-read',
        },
      },
    }),
  ],
};

export default NextAuth(authOptions);
