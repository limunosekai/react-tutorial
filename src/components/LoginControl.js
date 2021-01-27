import React from 'react';
import Greeting from './Greeting';

function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>;
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>;
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handelLoginClick = this.handelLoginClick.bind(this);
    this.handelLogoutClick = this.handelLogoutClick.bind(this);
    this.state = {
      isLoggedIn: false,
    };
  }

  handelLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handelLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handelLogoutClick}></LogoutButton>;
    } else {
      button = <LoginButton onClick={this.handelLoginClick}></LoginButton>;
    }

    let notiCount = 0;

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn}></Greeting>
        {button}
        {isLoggedIn && (
          <div>
            <h5>{new Date().toLocaleTimeString()}</h5>
            {notiCount > 0 ? (
              <h5>{'New noti: ' + notiCount}</h5>
            ) : (
              <h5>{'No notification'}</h5>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default LoginControl;
