import React from 'react';
import { Button, Stack, Title } from '@mantine/core';

interface ErrorFallbackProps {
  onClick: () => void;
}

const ErrorFallback = ({ onClick }: ErrorFallbackProps) => {
  return (
    <Stack align="center" spacing="xl" mt={64}>
      <Title>Oops, looks like an error occurred!</Title>
      <Button onClick={onClick} size="xl" radius="xl">
        Take Me Home
      </Button>
    </Stack>
  );
};

export default ErrorFallback;
