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
import About from './pages/About.jsx'
import Login from './pages/Login.jsx'
import CourseManagement from './pages/CourseManagement.jsx'
import { AuthProvider } from './context/AuthContext'
import AdminTestimonials from './pages/AdminTestimonials'
import AdminTestResults from './pages/AdminTestResults'
import AdminAcademicResults from './pages/AdminAcademicResults'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Body />} />
      <Route path='/courses' element={<Course />} />
      <Route path='/results' element={<Result />} />
      <Route path='/testimonials' element={<Testimonials />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/about' element={<About />} />
      <Route path='/login' element={<Login />} />
      <Route path='/admin/courses' element={<CourseManagement />} />
      <Route path='/admin/testimonials' element={<AdminTestimonials />} />
      <Route path='/admin/results' element={<AdminTestResults />} />
      <Route path='/admin/academic-results' element={<AdminAcademicResults />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    {/* <App/> */}
  </React.StrictMode>,
)
