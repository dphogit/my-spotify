// Recommended to use the jest --silent flag to hide console error messages
// polluting test output in your terminal.

import { fireEvent, render, screen } from '@testing-library/react';
import mockRouter from 'next-router-mock';
import ErrorBoundary from './ErrorBoundary';
import { PageRoutes } from '../../config/constants';

const TestComponent = () => {
  return <div>Test Component</div>;
};

const ErrorComponent = () => {
  throw new Error('');
};

describe('ErrorBoundary Component', () => {
  it('Should render with no error', () => {
    render(
      <ErrorBoundary>
        <TestComponent />
      </ErrorBoundary>
    );

    expect(screen.getByText(/test component/i)).toBeInTheDocument();
  });

  it('Should render the error fallback component when an error occurs', () => {
    render(
      <ErrorBoundary>
        <ErrorComponent />
      </ErrorBoundary>
    );

    expect(screen.getByText(/oops, looks like an error occurred!/i)).toBeInTheDocument();

    const takeMeHomeButton = screen.getByRole('button', { name: /take me home/i });
    expect(takeMeHomeButton).toBeInTheDocument();

    // Test routing to home page from error fallback
    fireEvent.click(takeMeHomeButton);
    expect(mockRouter).toMatchObject({
      asPath: PageRoutes.Home,
      pathname: PageRoutes.Home,
    });
  });
});
