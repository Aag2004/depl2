import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx'
import { Foot } from './Footer'
import './index.css'
    import { About } from './About'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children : [
      {
        path:'',
        element: <Foot/>
      },
      {
        path:'/About',
        element: <About/>
      },
      
    ]
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
    <RouterProvider router={router} basename="/depl2" />
    </> 
  </React.StrictMode>,
);