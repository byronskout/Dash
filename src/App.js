import React from 'react';
import './App.css';
import LocalStorageLayout from './LocalStorageLayout'
import api from '../src/util/api';
import Navbar from './Navbar';

class App extends React.Component {

  state = {
    logged_in: false,
    username: "",
    password: ""
  };

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      api.getCurrentUser(token).then(user => {
        this.setState({ logged_in: true, username: user.username });
      });
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onLoginClicked = e => {
    e.preventDefault();
    api.login(this.state.username, this.state.password).then(data => {
      console.log(data);
      if (data.error) {
        alert("Wrong details! Try again.");
      } else {
      localStorage.setItem("token", data.jwt);
      this.setState({ logged_in: true, username: data.username });
     }
    });
  };

  onSignupClicked = e => {
  e.preventDefault();
  api.signup(this.state.username, this.state.password).then(data => {
    if (data.error) {
      alert("There is already a user with that name.  Please select another username");
    } else {
      localStorage.setItem("token", data.jwt);
      this.setState({ logged_in: true, username: data.username });
    }
  });
};

  handleLogOut = () => {
    localStorage.clear("token");
    this.setState({
      logged_in: false,
      username: "",
      password: ""
    });
  };


  render() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="App">
        <Navbar
          logged_in={this.state.logged_in}
          onLoginClicked={this.onLoginClicked}
          handleLogOut={this.handleLogOut}
          username={this.state.username}
          handleChange={this.handleChange}
          onSignupClicked={this.onSignupClicked}
        />
      </div>

      <link rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/weather-icons/2.0.9/css/weather-icons.min.css"
      type="text/css"/>

      </header>
      <body>
      </body>
      <div>
        {localStorage.token ? (
          <div>
            <LocalStorageLayout/>
          </div>
        ) : (
            <div>

            </div>
        )}
      </div>


    </div>
  );
}

}

export default App;
