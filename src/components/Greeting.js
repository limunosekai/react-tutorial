import React from 'react';

function UserGreeting(props) {
  return <h1>Welcome Back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting></UserGreeting>;
  }
  return <GuestGreeting></GuestGreeting>;
}

export default Greeting;
