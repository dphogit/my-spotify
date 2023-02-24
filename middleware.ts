import { withAuth } from 'next-auth/middleware';
import { PageRoutes } from './config/constants';

export const config = { matcher: ['/profile'] };

export default withAuth({
  pages: {
    signIn: PageRoutes.Home,
  },
});
