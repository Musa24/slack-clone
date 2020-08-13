import React, { useContext } from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from '../firebase';
import { UserContext } from '../contexts/UserContext';

function Login() {
  const { loginUser } = useContext(UserContext);

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((res) => {
        loginUser(res.user);
      })
      .catch((err) => {
        console.log('ERRORS', err);
      });
  };

  return (
    <div className="Login">
      <div className="Login-coontainer">
        <img
          src="https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg"
          alt="slack Logo"
        />
        <h1>Sign in To Slack Community</h1>
        <p>Place where you can share with others</p>
        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  );
}

export default Login;
