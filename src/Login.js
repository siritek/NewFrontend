import React, { useState } from 'react';
import App from './App';
import "./App.css"

function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [userRole, setUserRole] = useState(''); // Initialize userRole state

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   // Perform authentication logic here
  //   if (username === 'nxt' && password === 'nxt') {
  //     setLoggedIn(true);
  //   } else {
  //     setErrorMessage('Invalid Credentials Please Try Again');
  //   }
  // };

  // if (loggedIn) {
  //   return <App />;
  // }


  const handleSubmit = (event) => { 
    event.preventDefault(); 
   
    let newUserRole = ''; // Rename this variable to avoid conflict 
    if (username === 'nxt' && password === 'nxt') { 
      setLoggedIn(true); 
      newUserRole = 'admin'; // Set userRole to 'admin' for 'nxt' user 
    } else if (username === 'user1' && password === 'user1') { 
      setLoggedIn(true); 
 
      newUserRole = 'user1'; // Set userRole to 'user1' for 'user1' user 
    } else { 
      setErrorMessage('Invalid Credentials Please Try Again'); 
    } 
    setUserRole(newUserRole); 
 
  }; 
   
  if (loggedIn) { 
    return <App userRole={userRole} />; 
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
         
          <div className="form-group mt-3">
            <label>User Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter User Name"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div> {errorMessage && (
            <p className="error-message" style={{color:"red"}}>{errorMessage}</p>
          )}
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
