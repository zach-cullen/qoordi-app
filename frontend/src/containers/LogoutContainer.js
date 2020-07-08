import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logOutUser } from '../services/authService'

class LogoutContainer extends Component {

  // calls authService action immediately on load of this component that sends logout request to api
  // dispatches reset store to prevent data leak to other users
  logOut = () => {
    this.props.dispatch({ type: "RESET_STORE"})
    logOutUser({id: this.props.session.user.id})
  }

  componentDidMount() {
    this.logOut()
  }

  // this container renders a temporary element until successful logout action updates state and causes router to redirect
  render() {
    return(
      <div className="main" id="logout">
        <div className="main-container">
        </div>
      </div>
    )
  }
}

export default connect(state => ({session: state.session}))(LogoutContainer)