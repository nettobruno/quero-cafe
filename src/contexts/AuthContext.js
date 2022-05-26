import { createContext, useState } from 'react';
import { signInRequest } from '../services/auth';
import { setCookie } from 'nookies';
import Router from 'next/router';

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const isAuthenticated = !!user;


  async function signIn({ email, password }) {
    const { token, user } = await signInRequest({
      email,
      password
    });

    setCookie(undefined, 'nextAuthToken', token, {
      maxAge: 60 * 60 * 1 //1 hora 
    })

    setUser(user);

    Router.push('/dashboard')
  }

  async function signOut() {
    
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}