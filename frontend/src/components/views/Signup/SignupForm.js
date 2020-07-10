import React, { Component } from 'react'
import * as EmailValidator from 'email-validator'

class SignupForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      errorMessages: [],
      formData: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passwordConfirmation: '',
      }
    }
  }

  // keeps state formData synchronized with changes to form inputs
  handleChange = (event) => {
    this.setState({
      ...this.state,
      formData: {
        ...this.state.formData,
        [event.target.name]: event.target.value
      }
    })
  }

  // called when form submitted, checks for errors and calls prop function if no errors or sets state if errors
  handleSubmit = (event) => {
    event.preventDefault()
    const errors = this.checkFormForErrors(this.state.formData)

    this.setState({
      errorMessages: errors
    })

    if (errors.length === 0 ) {
      this.props.submitSignup(this.state.formData)
    }
  }

  // maps error messages in state to array of divs containing each message
  renderErrors = () => {

    const combinedErrors = this.state.errorMessages.concat(this.props.errorsFromApi)

    return combinedErrors.map((error, index) => {
      return (
        <div key={`signup-form-error-${index}`}>{error}</div>
      )
    })
  }

  // checks formData for errors and returns array of error message strings
  checkFormForErrors = (formData) => {

    const checkForEmptyFields = (formData) => {
      const emptyEntries = Object.entries(formData).filter((entry) => entry[1].length === 0 )
      return emptyEntries.length > 0 ? "Please do not leave any fields blank." : false
    }
  
    const checkForPasswordMismatch = (formData) => {
      if (!formData) return false
      return formData.password !== formData.passwordConfirmation ? "Passwords do not match." : false
    }

    const checkForInvalidEmail = (formData) => {
      if (!formData) return false
      // uses node package to validate format of email and return message or false
      return EmailValidator.validate(formData.email) === false ? "Please enter a valid email address" : false
    }

    // populates array of results of functions, and removes all that are false or empty
    const errors = [
      checkForEmptyFields(formData), 
      checkForInvalidEmail(formData),
      checkForPasswordMismatch(formData),
    ].filter(error => !!error)

    return errors
  }

  // returns html form when render is called
  render(){
    return(
      <div className="large-form user-info-form">
      <div className="large-form-header">Sign up</div>
      <form id="signup-form" onSubmit={this.handleSubmit}>

        <div className="name-inputs-container">
          <label>
            <input 
              type="text" name="firstName" placeholder="First name"
              onChange={this.handleChange} 
              value={this.state.formData.firstName} 
            />
          </label>
          
          <label>
            <input type="text" name="lastName" placeholder="Last name"
              onChange={this.handleChange} 
              value={this.state.formData.lastName} 
            />
          </label>
        </div>

        <label>
          <input 
            type="text" name="email" placeholder="Email"
            onChange={this.handleChange} 
            value={this.state.formData.email} 
          />
        </label>
        <br/>

        <label>
          <input 
            type="password" name="password" placeholder="Password"
            onChange={this.handleChange} 
            value={this.state.formData.password}
          />
        </label>
        <br/>

        <label>
          <input 
            type="password" name="passwordConfirmation" placeholder="Confirm password"
            onChange={this.handleChange} 
            value={this.state.formData.passwordConfirmation} 
          />
        </label>
        <br/>
        
        <button className="form-btn form-btn-enabled" type="submit">Submit</button>
    
        { this.renderErrors() }

      </form>
      </div>
    )
  }
}

export default SignupForm