import React from 'react';
import api from '../src/util/api';
import { createBrowserHistory } from 'history';
import LocalStorageLayout from './LocalStorageLayout';

import './Login.css';

class Login extends React.Component {

    state = {
      username: "",
      password: "",
    };


    render() {
        return (
          <form>
            <div>
              <label htmlFor="username">Username:</label>
              <input
                onChange={this.props.handleChange}
                id="username"
                type="text"
                name="username"
              />
              <label htmlFor="password">Password:</label>
              <input
                onChange={this.props.handleChange}
                id="password"
                type="text"
                name="password"
              />
              <button onClick={this.props.onLoginClicked}>Log in</button>
            </div>
          </form>
        );
    }

}

export default Login;
