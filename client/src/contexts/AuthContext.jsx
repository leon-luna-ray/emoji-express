import React, { createContext, useContext, useState, useEffect } from 'react';
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const [userEmail, setUserEmail] = useState(null);

  const logIn = () => {
    setLoggedIn(true);
  };

  const logOut = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
    setUserId(null);
  };

  const getUserDetails = (token) => {
    try {
      const decodedToken = jwtDecode(token);

      setUserId(decodedToken.userId);
      setUserEmail(decodedToken.email);
    } catch (error) {
      console.error('Error decoding token:', error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setLoggedIn(true);
      getUserDetails(token);
    }
  }, []);


  return (
    <AuthContext.Provider value={{ logIn, logOut, isLoggedIn, userId, userEmail, }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
