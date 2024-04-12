import React,{useContext} from 'react';
import {AuthProvider } from './src/components/context/AuthContext';
import AppNav from './AppNav';

export default function App() {
  // const {} = useContext(AuthContext)
  return (
    <AuthProvider>
        <AppNav/>
    </AuthProvider>
    
  );
}

