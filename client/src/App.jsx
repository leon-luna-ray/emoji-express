import React from 'react';
import { Routes, Route } from "react-router-dom"

import Home from './views/Home';
import Dashboard from './views/Dashboard';
import Login from './views/Login';
import Signup from './views/Signup';

import './styles/index.css'

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default App;
