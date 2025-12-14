import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from './pages/Main';
import Courses from './pages/Courses';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Main />
  },
  {
    path:'/courses',
    element:<Courses/>
  }
])

export default function App() {
  return (
    <RouterProvider router={router}/>
  )
}
