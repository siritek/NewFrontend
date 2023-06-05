import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import Login from './Login';
import App from './App';

// Check if the user is logged in
const isLoggedIn = false; // Replace with your authentication logic

ReactDOM.render(
  isLoggedIn ? <App /> : <Login />,
  document.getElementById('root')
);