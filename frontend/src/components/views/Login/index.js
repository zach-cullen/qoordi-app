import React from 'react'
import LoginForm from '../../forms/LoginForm'

const Login = (props) => {
  return(
    <div className="main-container" id="login-view">
      <LoginForm submitLogin={props.submitLogin}/>
    </div>
  )
}

export default Login