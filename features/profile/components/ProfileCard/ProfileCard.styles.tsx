import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  link: {
    textDecoration: 'none',
    color: 'inherit',
    transition: 'color 150ms ease-out',

    '&:hover': {
      color: theme.colors.spotify[6],
    },
  },
}));

export default useStyles;
