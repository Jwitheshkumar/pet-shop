// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './index.css';
import { AuthProvider } from './services/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 // <React.StrictMode>
 <AuthProvider>
    <App />
    </AuthProvider>
  //</React.StrictMode>
);
