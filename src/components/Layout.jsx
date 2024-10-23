import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../pages/Nav'
import Header from '../pages/HEader'
import Footer from '../pages/Footer'
const Layout = () => {
  return (
    <>
      <Header />
      <Nav />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
