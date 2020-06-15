import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../actions/usersActions'

class UserContainer extends Component {

  componentDidMount() {
    this.props.fetchUser(this.props.session.user)
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

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (user) => {
      dispatch(fetchUser(user))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps )(UserContainer)