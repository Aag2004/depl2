import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';
import { About } from './About'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const outer = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children : [
      {
        path:'/About',
        element: <About/>
      },
    ]
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
