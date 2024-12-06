import { Outlet } from 'react-router';
import Header from '../common/Header';
import Footer from '../common/Footer';

function MainLayout() {
  return (
    <div>
      <Header />
      <div className="min-h-[90vh]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;