import React from 'react'
import SignupForm from './SignupForm'

const Signup = (props) => {
  return(
    <div className="main-container" id="login-view">
      <div className="spacer-3"></div>
      <SignupForm submitSignup={props.submitSignup}/>
    </div>
  )
}

export default Signup