import React, { Component } from 'react'
import { signUpUser } from '../services/authService'
import SignupForm from '../components/forms/SignupForm'

class SignupContainer extends Component {

  // passes formData to auth service if no errors
  submitSignup = (formData) => {
    signUpUser(formData)
  }

  render() {
    return(
      <div id="signup">
        <h1>Sign Up</h1>
        <SignupForm propFunction={this.submitSignup} />
      </div>
    )
  }
}

export default SignupContainer