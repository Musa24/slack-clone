import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from '../firebase';

function Login() {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((res) => {
        console.log(res);
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
        <h1>Sign in To Clever Programming</h1>
        <p>clverprogrammers.slack.com</p>
        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  );
}

export default Login;
