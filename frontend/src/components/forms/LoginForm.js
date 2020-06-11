import React from 'react'
import { logInUser } from '../../actions/authActions'

const LoginForm = () => {

  const handleSubmit = (event) => {
    event.preventDefault()
    logInUser()
  }

  return(
    <form id="login-form" onSubmit={handleSubmit}>
      <label>
        Email: 
        <input type="text" name="email-input" />
      </label>
      <br/>
      <label>
        Password: 
        <input type="password" name="password-input" />
      </label>
      <br/>
      <input type="submit" value="Submit"/>
    </form>
  )
}

export default LoginForm