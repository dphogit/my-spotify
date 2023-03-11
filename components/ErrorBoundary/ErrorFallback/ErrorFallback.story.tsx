import React, { useState } from 'react';
import { Button, Center, Container } from '@mantine/core';
import ErrorFallback from './ErrorFallback';

export default {
  title: 'ErrorFallback',
};

export const Usage = () => {
  const [hasError, setHasError] = useState<boolean>(true);

  const showError = () => setHasError(true);
  const removeError = () => setHasError(false);

  return (
    <Container pt="xl" size="md">
      {hasError ? (
        <ErrorFallback onClick={removeError} />
      ) : (
        <Center>
          <Button onClick={showError} size="xl">
            Show error
          </Button>
        </Center>
      )}
    </Container>
  );
};
