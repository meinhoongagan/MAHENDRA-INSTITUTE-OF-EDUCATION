import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './pages/Footer';
import Nav from './pages/Nav';
import './index.css';

function App() {
  return (
    <div className="bg-zinc-50 text-center text-surface/75 dark:bg-gradient-to-r from-cyan-200 to-blue-200 dark:text-black/75 lg:text-left">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
