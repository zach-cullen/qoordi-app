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
    this.props.submitLogin(this.state)
  }

  render(){
    return(
      <div className="large-form user-info-form">
        <div className="large-form-header">Log in</div>
        <form id="login-form" onSubmit={this.handleSubmit}>
          <label>
            <input 
              type="text" name="email" placeholder="Email"
              onChange={this.handleChange} 
              value={this.state.email} 
            />
          </label>
          <br/>
          <label>
            <input 
              type="password" name="password" placeholder="Password"
              onChange={this.handleChange} 
              value={this.state.password} 
            />
          </label>
          <br/>
          <button className="form-btn form-btn-enabled" type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default LoginForm