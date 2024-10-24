import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Body from './pages/Body.jsx'
import Course from './components/Course.jsx'
import Result from './components/Result.jsx'
import Testimonials from './pages/Testimonials.jsx'
import Contact from './components/Contact.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Body />} />
      <Route path='/courses' element={<Course />} />
      <Route path='/results' element={<Result />} />
      <Route path='/testimonials' element={<Testimonials />} />
      <Route path='/contact' element={<Contact />} />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
    {/* <App/> */}
  </React.StrictMode>,
)
