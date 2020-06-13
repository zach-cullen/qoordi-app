import React from 'react'
import { logOutUser } from '../services/authService'

const LogoutContainer = () => {

  logOutUser({id: 1})

  return(
    <div id="logout">
      <h1>Logging out user...</h1>
    </div>
  )
}

export default LogoutContainer