import "./App.css";
import React from "react";

// Simulates data stored in a database
const users = [
  {
    email: "a@test.com",
    password: "1234",
  },
  {
    email: "b@test.com",
    password: "1234",
  },
  {
    email: "c@test.com",
    password: "1234",
  },
];

class App extends React.Component {
  // initialises state values
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errorMessage: "",
      successMessage: "",
    };
  }

  // clears previous messages by first setting msg state to ''.
  // Checks the state value of password and email set by the controlled component/form.
  // If the entered value matches one in the 'database' value of msg state is set.
  // When page rerenders, this is displayed to user.
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
          errorMessage: "Password did not match. Please try again",
        });
      }
    } else {
      this.setState({
        errorMessage: "Sorry, wrong credentials. Please try again",
      });
    }
  };

  onInputChange = (e) => {
    // Destructing used to match id of input with state key.
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  render() {
    return (
      // Diplays form to user.
      // OnChange sets the input to state to be compared by the onFormSubmit function when submitted.

      <div className="container">
        {this.state.errorMessage}
        {this.state.successMessage}
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
            value={this.state.password}
            onChange={this.onInputChange}
          />
          <input type="submit" value="submit" id="submit" />
        </form>
      </div>
    );
  }
}

export default App;
