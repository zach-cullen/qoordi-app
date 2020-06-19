import React, { Component } from 'react'
import { logInUser } from '../services/authService'
import LoginForm from '../components/forms/LoginForm.js'

class LoginContainer extends Component {

  submitLogin = (formData) => {
    logInUser(formData)
  }

  render() {
    return(
      <div className="main-container" id="login">
        <LoginForm propFunction={this.submitLogin}/>
      </div>
    )
  }
}

export default LoginContainer