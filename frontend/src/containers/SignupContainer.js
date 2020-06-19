import React, { Component } from 'react'
import { signUpUser } from '../services/authService'
import SignupForm from '../components/forms/SignupForm'

class SignupContainer extends Component {

  constructor() {
    super()
    this.state = {
      errorsFromApi: []
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
      <div className="main-container" id="signup">
        <SignupForm propFunction={this.submitSignup} errorsFromApi={this.state.errorsFromApi} />
      </div>
    )
  }
}

export default SignupContainer