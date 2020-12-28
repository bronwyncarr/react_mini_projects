import "./App.css";
import React from "react";

const users = [
  {
    email: "a@test.com",
    password: "asdf",
  },
  {
    email: "",
    password: "",
  },
  {
    email: "",
    password: "",
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errorMessage: "",
      successMessage: "",
    };
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    this.setState({
      errorMessage: "",
      successMessage: "",
    });
    const foundUser = users.find((user) => user.email === email);
    if (foundUser) {
      users.find((user) => user.password === password);
      if (foundUser.password === password) {
        this.setState({
          successMessage: "Sucessfully authenticated. Welcome back!",
        });
      } else {
        this.setState({
          errorMessage: "Sorry wrong credentials. Please try again",
        });
      }
    } else {
      this.setState({
        errorMessage: "Sorry wrong credentials. Please try again",
      });
    }
  };

  onInputChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  render() {
    return (
      <div className="container">
        {this.state.errorMessage && (
          <p>Sorry, wrong Credentials entered. Please try again</p>
        )}
        {this.state.successMessage && (
          <p>Sucessfully verified. Welcome back!</p>
        )}
        <h1>Log in</h1>
        <form className="login-form" onSubmit={this.onFormSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={this.state.email}
            onChange={this.onInputChange}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={this.state.email}
            onChange={this.onInputChange}
          />
          <input type="submit" value="submit" id="submit" />
        </form>
      </div>
    );
  }
}

export default App;
