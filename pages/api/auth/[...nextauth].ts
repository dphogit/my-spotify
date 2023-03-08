import NextAuth, { NextAuthOptions } from 'next-auth';
import SpotifyProvider from 'next-auth/providers/spotify';
import { JWT } from 'next-auth/jwt';
import { PageRoutes } from '../../../config/constants';

// https://developer.spotify.com/documentation/general/guides/authorization/code-flow/
interface SpotifyRefreshTokenResponse {
  access_token: string;
  refresh_token?: string;
  token_type: 'Bearer';
  scope: string;
  expires_in: number; // Seconds until the access token expires
}

const spotifyClientId = process.env.SPOTIFY_CLIENT_ID;
const spotifyClientSecret = process.env.SPOTIFY_CLIENT_SECRET;

if (!spotifyClientId || !spotifyClientSecret) {
  throw new Error('Spotify client id or secret missing');
}

const refreshAccessToken = async (token: JWT): Promise<JWT> => {
  if (!token.refreshToken) throw new Error('RefreshAccessTokenError');

  const params = new URLSearchParams({
    client_id: spotifyClientId,
    client_secret: spotifyClientSecret,
    grant_type: 'refresh_token',
    refresh_token: token.refreshToken,
  });

  const url = `https://accounts.spotify.com/api/token?${params.toString()}`;

  const response = await fetch(url, {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    method: 'POST',
  });

  const refreshedTokens = (await response.json()) as SpotifyRefreshTokenResponse;

  if (!response.ok) throw new Error('RefreshAccessTokenError');

  return {
    ...token,
    accessToken: refreshedTokens.access_token,
    expiresAt: Date.now() + refreshedTokens.expires_in * 1000,
    // Spotify says a refresh token come back sometimes which is a bit weird/unhelpful.
    refreshToken: refreshedTokens.refresh_token ?? token.refreshToken,
  };
};

export const authOptions: NextAuthOptions = {
  callbacks: {
    jwt: ({ token, account }) => {
      // Initial sign in
      if (account) {
        return {
          ...token,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          expiresAt: account.expires_at,
        };
      }

      // Check for expired access token
      if (token.expiresAt && Date.now() > token.expiresAt) {
        try {
          return refreshAccessToken(token);
        } catch (error) {
          console.log(error);
          return {
            ...token,
            error: 'RefreshAccessTokenError' as const,
          };
        }
      }

      return token;
    },
    session: ({ session, token }) => {
      return {
        ...session,
        accessToken: token.accessToken,
        user: { ...session.user, id: token.sub },
        error: token.error,
      };
    },
  },
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
          scope:
            'user-read-private user-read-email user-top-read user-follow-read playlist-read-private',
        },
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
};

export default NextAuth(authOptions);
