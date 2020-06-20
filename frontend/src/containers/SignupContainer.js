import React, { Component } from 'react'
import { signUpUser } from '../services/authService'
import Signup from '../components/views/Signup'
import NavBar from '../components/views/NavBar'

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
      <div id="signup-container">
        <NavBar />
        <div className="main-container" id="signup">
          <Signup submitSignup={this.submitSignup} errorsFromApi={this.state.errorsFromApi} />
        </div>
      </div>
    )
  }
}

export default SignupContainer