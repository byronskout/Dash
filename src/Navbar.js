import React from "react";
import './Login.css';
import logo from './logo.jpg';
import BackgroundSlideshow from 'react-background-slideshow';

class Navbar extends React.Component {
  state = {
    username: "",
    password: ""
  };

  render() {
    return (
      <div>
        {localStorage.token ? (
          <div>
            <div> {`Welcome back, ${this.props.username}`}</div>
            <button id="logout-button" onClick={this.props.handleLogOut}>Log out</button>
          </div>
        ) : (
          <div class="login-page">
          <p id="titl">DASH</p>
          <form class="register-form">
            <div class="form">
              <label htmlFor="username">Username</label>
              <input
                class="enter"
                onChange={this.props.handleChange}
                id="username"
                type="text"
                placeholder="username"
                name="username"
              />
              <label htmlFor="password">Password</label>
              <input
                class="enter"
                onChange={this.props.handleChange}
                id="password"
                type="password"
                name="password"
                placeholder="password"
              />
              <button id="btn" onClick={this.props.onLoginClicked}>Log in</button>
              <button id="btn" onClick={this.props.onSignupClicked}>Sign Up</button>
            </div>
          </form>
          </div>
        )}
      </div>
    );
  }
}

export default Navbar;
