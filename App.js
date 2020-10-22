import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './src/Routes/auth';
import Rotas from './src/Routes/index';
import PiuComent from './src/Components/Table/index';

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Rotas/>
      </AuthProvider>
    </BrowserRouter>
  );
}
