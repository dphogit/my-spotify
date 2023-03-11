import { render, screen } from '@testing-library/react';
import HomePage from 'pages';

it('should render the home page', () => {
  render(<HomePage />);

  expect(screen.getByRole('heading')).toHaveTextContent(/visualize my spotify/i);
  expect(screen.getByRole('button', { name: /login with spotify/i })).toBeInTheDocument();
});
