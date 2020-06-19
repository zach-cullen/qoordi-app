import './forms.css'
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
    this.props.propFunction(this.state)
  }

  render(){
    return(
      <div className="user-info-form">
        <div className="user-info-form-header">Log in</div>
        <form id="login-form" onSubmit={this.handleSubmit}>
          <label>
            <input type="text" name="email" onChange={this.handleChange} value={this.state.email} placeholder="Email"/>
          </label>
          <br/>
          <label>
            <input type="password" name="password" onChange={this.handleChange} value={this.state.password} placeholder="Password"/>
          </label>
          <br/>
          <button className="form-btn" type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default LoginForm