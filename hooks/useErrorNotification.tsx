import { showNotification } from '@mantine/notifications';

const useErrorNotification = () => {
  return (message: string) => {
    showNotification({
      color: 'red',
      title: 'Error',
      message,
    });
  };
};

export default useErrorNotification;
