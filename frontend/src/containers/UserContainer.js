import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../actions/usersActions'

class UserContainer extends Component {

  componentDidMount() {
    this.props.fetchUser(this.props.session.user)
  }

  userIsLoaded = () => {
    const allUserIds = this.props.entities.users.allIds
    if (allUserIds.length > 0) {
      return allUserIds.includes(this.props.session.user.id)
    }
    return false
  }

  renderUserName = () => {
    if (this.userIsLoaded()) {
      const currentUser = this.props.entities.users.byId[this.props.session.user.id]
      return(
        <h2>{ currentUser.given_name }</h2>
      )
    }
  }

  render() {
    return(
      <div id="user-container">
        <h1>User</h1>
        { this.renderUserName() }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    session: state.session,
    entities: state.entities
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