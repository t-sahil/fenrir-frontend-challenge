import { Outlet } from 'react-router-dom';
import Sidebar from './sub_layout/Sidebar';
import Header from './sub_layout/Header';
import './MainLayout.scss';

const MainLayout = () => {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-wrapper">
        <Header />
        <main className="content-area">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;