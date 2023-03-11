import React, { ErrorInfo } from 'react';
import { withRouter, NextRouter } from 'next/router';
import { PageRoutes } from 'config/constants';
import { ErrorFallback } from './ErrorFallback';

interface WithRouterProps {
  router: NextRouter;
}

interface ErrorBoundaryProps extends WithRouterProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps> {
  public state: ErrorBoundaryState;

  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  render() {
    return this.state.hasError ? (
      <ErrorFallback
        onClick={() => {
          this.setState({ hasError: false });
          this.props.router.push(PageRoutes.Home);
        }}
      />
    ) : (
      (this.props as ErrorBoundaryProps).children
    );
  }
}

export default withRouter(ErrorBoundary);
