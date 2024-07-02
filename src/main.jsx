import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {App} from './App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom';



const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
  //   children : [
  //     {
  //       path:'',
  //       element: <Home/>
  //     },
  //     {
  //       path:'/Blog',
  //       element: <Blog/>
  //     },
  //     {
  //       path:'/Home',
  //       element: <Home/>
  //     },
  //     {
  //       path:'/About',
  //       element: <About/>
  //     },
  //     {
  //       path:'/Login',
  //       element: <Login/>
  //     },
  //     {
  //       path:'/BlogP1',
  //       element: <BlogP1/>
  //     },
  //     {
  //       path:'/BlogP2',
  //       element: <BlogP2/>
  //     },
  //     {
  //       path:'/BlogP5',
  //       element: <BlogP5/>
  //     },
  //     {
  //       path:'/BlogP3',
  //       element: <BlogP3/>
  //     },
  //     {
  //       path:'/BlogP4',
  //       element: <BlogP4/>
  //     },
  //     {
  //       path:'/Dict',
  //       element: <Dict/>
  //     },
  //   ]
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <RouterProvider router={router}/>
    </> 
  </React.StrictMode>,
);
