import React from 'react'
import SignupForm from './SignupForm'

const Signup = (props) => {
  return(
    <div className="main-container" id="login-view">
      <SignupForm submitSignup={props.submitSignup}/>
    </div>
  )
}

export default Signup