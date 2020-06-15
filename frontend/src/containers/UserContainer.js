import React, { Component } from 'react'
import { connect } from 'react-redux'

class UserContainer extends Component {

  componentDidMount() {
    console.log("User Container mounted for user: ", this.props.session.user)
  }


  render() {
    return(
      <div id="user-container">
        <h1>User</h1>
      </div>
    )
  }
}

const mapDispatchToProps = (state) => {
  return {
    session: state.session,
  }
}

export default connect(mapDispatchToProps)(UserContainer)