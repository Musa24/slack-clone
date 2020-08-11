import React, { Component, createContext } from 'react';

export const UserContext = createContext();

class UserContextProvider extends Component {
  state = {
    user: null,
  };
  loginUser = (user) => {
    this.setState({ user: user });
  };
  render() {
    return (
      <UserContext.Provider
        value={{ ...this.state, loginUser: this.loginUser }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserContextProvider;
