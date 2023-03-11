import { fireEvent, render, screen } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import HomePage from 'pages';
import { useLoginWithSpotify } from 'hooks';
import { mocked } from 'jest-mock';

jest.mock('hooks', () => ({
  useErrorNotification: jest.requireActual('hooks').useErrorNotification,
  useLoginWithSpotify: jest.fn(),
}));

describe('Home Page', () => {
  it('should render the home page', () => {
    render(<HomePage />);

    expect(screen.getByRole('heading')).toHaveTextContent(/visualize my spotify/i);
    expect(screen.getByRole('button', { name: /login with spotify/i })).toBeInTheDocument();
  });

  it('should show an error notification when login fails', async () => {
    mocked(useLoginWithSpotify).mockImplementation(() => () => {
      throw new Error('Failed to login with Spotify');
    });

    render(
      <MantineProvider>
        <NotificationsProvider>
          <HomePage />
        </NotificationsProvider>
      </MantineProvider>
    );

    const loginButton = screen.getByRole('button', { name: /login with spotify/i });
    fireEvent.click(loginButton);

    const error = await screen.findByText(/failed to login with spotify/i);
    expect(error).toBeInTheDocument();
  });
});
