import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Footer.jsx';

export default function SiteLayout() {
  const { pathname } = useLocation();
  const home = pathname === '/';

  return (
    <div className={`site-shell ${home ? 'site-shell--home' : 'site-shell--inner'}`}>
      <Outlet />
      <Footer />
    </div>
  );
}
