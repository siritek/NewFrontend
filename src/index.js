import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import Login from './Login';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root')); 
// Check if the user is logged in
const isLoggedIn = false; // Replace with your authentication logic

root.render(
  isLoggedIn ? <App /> : <Login />,
 
);