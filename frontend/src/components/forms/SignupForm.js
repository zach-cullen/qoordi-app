import React, { Component } from 'react'

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
      this.props.propFunction(this.state.formData)
    }
  }

  // maps error messages in state to array of divs containing each message
  renderErrors = () => {
    return this.state.errorMessages.map((error, index) => {
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

    let errors = [
      checkForEmptyFields(formData), 
      checkForPasswordMismatch(formData)
    ].filter(error => !!error)

    return errors
  }

  // returns html form when render is called
  render(){
    return(
      <form id="signup-form" onSubmit={this.handleSubmit}>

        <label>
          First Name: 
          <input type="text" name="firstName" onChange={this.handleChange} value={this.state.formData.firstName}/>
        </label>
        <br />

        <label>
          Last Name: 
          <input type="text" name="lastName" onChange={this.handleChange} value={this.state.formData.lastName}/>
        </label>
        <br />

        <label>
          Email: 
          <input type="text" name="email" onChange={this.handleChange} value={this.state.formData.email}/>
        </label>
        <br/>

        <label>
          Password: 
          <input type="password" name="password" onChange={this.handleChange} value={this.state.formData.password}/>
        </label>
        <br/>

        <label>
          Confirm Password: 
          <input type="password" name="passwordConfirmation" onChange={this.handleChange} value={this.state.formData.passwordConfirmation}/>
        </label>
        <br/>
        
        <input type="submit" value="Submit"/>
    
        { this.renderErrors() }

      </form>
    )
  }
}

export default SignupForm