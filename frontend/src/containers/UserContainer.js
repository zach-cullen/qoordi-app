import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../actions/usersActions'
import Dashboard from '../components/views/Dashboard'

class UserContainer extends Component {

  // after first first render asks api to load user data for the logged in user
  componentDidMount() {
    this.props.fetchUser(this.props.session.user)
  }

  // returns user in entities corresponding to the session user, returns undefined if not found
  currentUser = () => {
    return this.props.entities.users.byId[this.props.session.user.id]
  }

  render() {
    return(
      <div className="main">
        <Dashboard currentUser={this.currentUser()} />
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