import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import CustomCursor from '../ui/CustomCursor';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <CustomCursor />
      <Nav />
      <main className="flex-grow pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
