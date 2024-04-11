import React from 'react'
import Layout from "./Layout.jsx";
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx';
import User from './components/user/User.jsx';
import Github from './components/github/Github.jsx';

const router=createBrowserRouter([
  {
  path:"/",
  element: <Layout/>,
  children:[
    {
      path:"",
element:<Home/>,
  },
  {
    path:'about',
    element:<About/>
  },
  {
    path:'Contact',
    element:<Contact />
  },
  {
    path:'User/:id',
    element:<User/>
  },
  {
    path:'Github',
    element:<Github/>
  }
  ]
}])
   ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
