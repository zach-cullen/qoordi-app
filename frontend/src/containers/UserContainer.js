import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../actions/usersActions'

class UserContainer extends Component {

  componentDidMount() {
    
  }


  render() {
    return(
      <div id="user-container">
        <h1>User</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    session: state.session,
  }
}

export default connect(mapStateToProps)(UserContainer)