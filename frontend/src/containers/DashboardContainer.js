import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../actions/usersActions'
import Dashboard from '../components/views/Dashboard'

class DashboardContainer extends Component {

  // after first first render asks api to load user data for the logged in user
  componentDidMount() {
    this.props.fetchUser(this.props.session.user)
  }

  // returns user in entities corresponding to the session user, returns undefined if not found
  currentUser = () => {
    return this.props.entities.users.byId[this.props.session.user.id]
  }

  mapUserCategories = () => {
    const categories = this.props.entities.categories
    return categories.allIds.map((id) => categories.byId[id])
  }

  mapUserProjects = () => {
    const projects = this.props.entities.projects
    return projects.allIds.map((id) => projects.byId[id])
  }

  render() {
    return(
      <div className="main">
        <Dashboard 
          currentUser={this.currentUser()}
          categories={this.mapUserCategories()}
          projects={this.mapUserProjects()}
        />
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

export default connect(mapStateToProps, mapDispatchToProps )(DashboardContainer)