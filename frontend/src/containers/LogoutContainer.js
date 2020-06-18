import React from 'react'
import { connect } from 'react-redux'
import { logOutUser } from '../services/authService'

const LogoutContainer = ({ session }) => {

  // calls authService action immediately on load of this component that sends logout request to api
  logOutUser({id: session.user.id})

  // this container renders a temporary element until successful logout action updates state and causes router to redirect
  return(
    <div className="main-container" id="logout">
      <h1>Logging out user...</h1>
    </div>
  )
}

export default connect(state => ({session: state.session}))(LogoutContainer)