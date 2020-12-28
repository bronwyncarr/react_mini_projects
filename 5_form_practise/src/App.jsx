import './App.css';
import React from 'react'

const users = [
  {
    email: "a@test.com",
    password: "asdf"
  },
  {
    email: "",
    password: ""
  },
  {
    email: "",
    password: ""
  }
]

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      errorMessage: "",
      successMessage: ""
    }
  }

  onFormSubmit = (e) => {
    e.preventDefault()
    this.setState({errorMessage: ""})
    const formElement = e.target.children
    const inputElement = formElement[1]
    const passwordElement = formElement[3]
    const emailValue = inputElement.value
    const passwordValue = passwordElement.value
    const foundUser = users.find((user) => user.email === emailValue)
    if (foundUser) {
      users.find((user) => user.password === passwordValue)
      if(foundUser.password === passwordValue) {
        this.setState({
          successMessage: "Sucessfully authenticated. Welcome back!"
        })
      } else {
          this.setState({
            errorMessage: "Sorry wrong credentials. Please try again"
          })
      }       
    } else {
      this.setState({
        errorMessage: "Sorry wrong credentials. Please try again"
      })
    }
  }

  render() {
    return (
      <div className="container">
        {this.state.errorMessage && <p>Sorry, wrong Credentials entered. Please try again</p>}
        {this.state.successMessage && <p>Sucessfully verified. Welcome back!</p>}
        <h1>Log in</h1>
          <form className="login-form" onSubmit={this.onFormSubmit}>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email"/>
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password"/>
            <input type="submit" value="submit" id="submit"/>
          </form>
      </div>
    );
  }
}

export default App;
