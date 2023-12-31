import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './Paginas/Home.jsx'
import User from './Paginas/User.jsx'
import Admin from './Paginas/Admin.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Selector from './Paginas/Selector.jsx'

const routes = [
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/UserSelect",
    element: <Selector/>,
  },
  {
    path: "/UserSelect/User",
    element: <User/>,
  },
  {
    path: "/UserSelect/Admin",
    element: <Admin/>,
  }
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
