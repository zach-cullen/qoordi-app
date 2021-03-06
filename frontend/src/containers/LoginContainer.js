import React, { Component } from 'react'
import { logInUser } from '../services/authService'
import NavBar from '../components/views/NavBar'
import Login from '../components/views/Login'

class LoginContainer extends Component {

  submitLogin = (formData) => {
    logInUser(formData)
  }

  render() {
    return(
      <div id="login-container">
        <NavBar />
        <div className="main">
          <Login submitLogin={this.submitLogin}/>
        </div>
      </div>
    )
  }
}

export default LoginContainer