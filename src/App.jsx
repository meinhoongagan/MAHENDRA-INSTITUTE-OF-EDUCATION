import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './pages/Footer';
import Nav from './pages/Nav';
import './index.css';

function App() {
  const location = useLocation();

  // Check if the current path is /login
  const hideLayout = location.pathname === '/login';

  return (
    <div className="bg-zinc-50 text-center text-surface/75 dark:bg-gradient-to-r from-cyan-200 to-blue-200 dark:text-black/75 lg:text-left">
      {!hideLayout && <Nav />}
      <Outlet />
      {!hideLayout && <Footer />}
    </div>
  );
}

export default App;
