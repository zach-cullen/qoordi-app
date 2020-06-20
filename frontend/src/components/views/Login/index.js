import React from 'react'
import LoginForm from './LoginForm'

const Login = (props) => {
  return(
    <div className="main-container" id="login-view">
      <div className="spacer-3"></div>
      <LoginForm submitLogin={props.submitLogin}/>
    </div>
  )
}

export default Login