import React from 'react'
import { logInUser } from '../../actions/authActions'

const LoginForm = () => {

  const handleSubmit = () => {
    logInUser()
  }

  return(
    <div id="login-form">
      <button onClick={handleSubmit}>Log In</button>
    </div>
  )
}

export default LoginForm