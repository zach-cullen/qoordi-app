import React, { Component } from 'react'
import SignupForm from '../components/forms/SignupForm'

class SignupContainer extends Component {

  submitSignup = (formData) => {
    console.log("submitting info: ", formData )
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