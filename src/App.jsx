import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Foot } from './Footer';
import { About } from './About';

import './App.css';

function App() {
  return (
    <Router basename="/depl2">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Foot />} />
          <Route path="/About" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}

function Layout() {
  return (
    <>
      <Outlet />
      {/* <Foot /> */}
    </>
  );
}

export default App;


{/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}