import React from 'react';
import { Routes, Route } from "react-router-dom"

import Header from './components/Header';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';

import './styles/index.css'

const App = () => {
  return (
    <div id="react-app" className='relative'>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
