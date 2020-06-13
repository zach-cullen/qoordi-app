import React from 'react'
import { connect } from 'react-redux'
import { logOutUser } from '../services/authService'

const LogoutContainer = ({ session }) => {

  logOutUser({id: session.user.id})

  return(
    <div id="logout">
      <h1>Logging out user...</h1>
    </div>
  )
}

export default connect(state => ({session: state.session}))(LogoutContainer)