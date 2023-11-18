import React, { createContext, useContext, useState, useEffect } from 'react';
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const logIn = (token) => {
    try {
      const decodedToken = jwtDecode(token);

      setUser({
        id: decodedToken.userId,
        email: decodedToken.email,
      });
      setLoggedIn(true);
    } catch (error) {
      console.error('Error decoding token:', error);
    }
  };

  const logOut = () => {
    localStorage.removeItem('token');
    setUser(null);
    setLoggedIn(false);
  };


  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      logIn(token);
    }
  }, []);


  return (
    <AuthContext.Provider value={{ logIn, logOut, isLoggedIn, user, }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
