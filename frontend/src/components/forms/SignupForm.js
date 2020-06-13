import React, { Component } from 'react'

class SignupForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.propFunction(this.state)
  }

  render(){
    return(
      <form id="signp-form" onSubmit={this.handleSubmit}>

        <label>
          First Name: 
          <input type="text" name="firstName" onChange={this.handleChange} value={this.state.firstName}/>
        </label>
        <br />

        <label>
          Last Name: 
          <input type="text" name="lastName" onChange={this.handleChange} value={this.state.lastName}/>
        </label>
        <br />

        <label>
          Email: 
          <input type="text" name="email" onChange={this.handleChange} value={this.state.email}/>
        </label>
        <br/>

        <label>
          Password: 
          <input type="password" name="password" onChange={this.handleChange} value={this.state.password}/>
        </label>
        <br/>

        <label>
          Confirm Password: 
          <input type="password" name="passwordConfirmation" onChange={this.handleChange} value={this.state.passwordConfirmation}/>
        </label>
        <br/>

        <input type="submit" value="Submit"/>

      </form>
    )
  }
}

export default SignupForm