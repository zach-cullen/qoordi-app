import React, { Component } from 'react'

class LoginForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.propFunction({user: this.state})
  }

  render(){
    return(
      <form id="login-form" onSubmit={this.handleSubmit}>
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
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}

export default LoginForm