import React, { Component } from 'react'
import SignupForm from '../components/forms/SignupForm'

class SignupContainer extends Component {

  // passes formData to auth service if no errors
  submitSignup = (formData) => {
    console.log("submitting: ", formData)
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