import React, { Component } from 'react'
import { logInUser } from '../services/authService'
import LoginForm from '../components/forms/LoginForm'

class LoginContainer extends Component {

  submitLogin = (user) => {
    logInUser(user)
  }

  render() {
    return(
      <div id="login">
        <h1>Log In</h1>
        <LoginForm propFunction={this.submitLogin}/>
      </div>
    )
  }
}

export default LoginContainer