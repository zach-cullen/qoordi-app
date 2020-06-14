import React, { Component } from 'react'
import { signUpUser } from '../services/authService'
import SignupForm from '../components/forms/SignupForm'

class SignupContainer extends Component {

  constructor() {
    super()
    this.state = {
      errorsFromApi: ["banana"]
    }
  }

  // passes formData to auth service if no errors
  submitSignup = (formData) => {
    signUpUser(formData)
      .then(json => {
        if (!json.signed_up) {
          let errors = () => json.errors
          this.setState({
            errorsFromApi: errors()
          })
        }
      })
  }

  render() {
    return(
      <div id="signup">
        <h1>Sign Up</h1>
        <SignupForm propFunction={this.submitSignup} errorsFromApi={this.state.errorsFromApi} />
      </div>
    )
  }
}

export default SignupContainer