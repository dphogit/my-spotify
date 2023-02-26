# Interacting With The Spotify API

This codebase has established a pattern for interacting with the Spotify Web API, leveraging [`spotify-web-api-js`](https://github.com/jmperez/spotify-web-api-js) client library and [`SWR`](https://swr.vercel.app/) for client side fetching using React hooks.

At the time of writing this, there is a custom hook that wraps the usage of these two libraries to make calls in the [`hooks/useSpotifyApi`](hooks/useSpotifyApi.tsx) file. It is essentially a hook that takes in an object with various configuration properties and a main callback function which provides access to a spotify client instance with a set access token that you can use for your calls.

This should be all your need to fetch data from and interact with the spotify API, if you do however implement your own custom code try to use the same packages in case of future changes.

## Example

Say you want to fetch the current user's profile information, you can do so using the `useSpotifyApi` custom hook like so:

```tsx
import { useSpotifyApi } from 'hooks';

const useGetProfile = () => {
  return useSpotifyApi({
    cacheKey: 'profile',                    // cache key that SWR uses to cache responses
    cb: ({ spotify }) => spotify.getMe(),   // your custom callback function with the spotify client instance
    swrOptions: {
      // Your custom swr options (optional)
    },
  });
};
```
