import React, { useEffect } from 'react';
// import styles from './Layout.module.css';
// import { Footer } from '@/widgets/Footer';
import { Navbar } from '@/widgets/Navbar';
// import { Sidebar } from '@/widgets/Sidebar';
import { Outlet } from 'react-router-dom';
import { useAppDispatch } from '@/shared/hooks/reduxhooks';
import { refreshAccessToken } from '@/entities/user'


const Layout: React.FC = () => {

  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(refreshAccessToken())
  }, [dispatch]);

  return (
    <div>
    <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;