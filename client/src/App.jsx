import React from 'react';
import { Routes, Route } from "react-router-dom"

import { AuthProvider, useAuth } from './contexts/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';

import './styles/index.css'

const App = () => {

  return (
    <AuthProvider>
      <div id="react-app" className='relative h-screen flex justify-between flex-col'>
        <div className='flex-col-2'>
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
        <Footer />
      </div>
    </AuthProvider>
  );
};

export default App;
