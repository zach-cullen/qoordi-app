import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logInUser } from '../actions/sessionActions'
import LoginForm from '../components/forms/LoginForm'

class LoginContainer extends Component {

  submitLogin = (user) => {
    // dispatch logInUser action with payload of user
    this.props.logInUser(user)
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

// map dispatch to props with imported logInUser action creator as argument
export default connect(null, { logInUser })(LoginContainer)