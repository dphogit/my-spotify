import NextAuth, { NextAuthOptions } from 'next-auth';
import SpotifyProvider from 'next-auth/providers/spotify';

const spotifyClientId = process.env.SPOTIFY_CLIENT_ID;
const spotifyClientSecret = process.env.SPOTIFY_CLIENT_SECRET;

if (!spotifyClientId || !spotifyClientSecret) {
  throw new Error('Spotify client id or secret missing');
}

export const authOptions: NextAuthOptions = {
  providers: [SpotifyProvider({ clientId: spotifyClientId, clientSecret: spotifyClientSecret })],
};

export default NextAuth(authOptions);
