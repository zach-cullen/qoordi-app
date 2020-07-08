import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../actions/usersActions'
import Dashboard from '../components/views/Dashboard'
import PopUpForm from '../components/views/PopUpForm'

class DashboardContainer extends Component {

  constructor() {
    super()
    this.state = {
      activePopup: "",
      hiddenCategoryIds: [],
    }
  }

  // after first first render asks api to load user data for the logged in user
  componentDidMount() {
    this.props.fetchUser(this.props.session.user)
  }

  // returns user in entities corresponding to the session user, returns undefined if not found
  currentUser = () => {
    return this.props.entities.users.byId[this.props.session.user.id]
  }

  // transforms projects object normalized for redux to an array of objects
  mapUserProjects = () => {
    const projects = this.props.entities.projects
    const projectsArray = projects.allIds.map((id) => projects.byId[id])
    return this.filterHiddenProjects(projectsArray)
  }

  filterHiddenProjects = (projectsArray) => {
    return projectsArray.filter((project) => !this.state.hiddenCategoryIds.includes(project.category_id))
  }

  setActivePopup = (popUpTitle) => {
    this.setState({
      ...this.state,
      activePopup: popUpTitle,
    })
  } 

  toggleHideCategory = (categoryId) => {
    if (this.state.hiddenCategoryIds.includes(categoryId)) {
      this.setState({
        hiddenCategoryIds: this.state.hiddenCategoryIds.filter((i) => i !== categoryId)
      })
    } else {
      this.setState({
        hiddenCategoryIds: this.state.hiddenCategoryIds.concat(categoryId)
      })
    }
  }

  renderPopupIfActive = (activePopup) => {
    if (!!activePopup) {
      return(
        <PopUpForm 
          activePopup={this.state.activePopup} 
          setActivePopup={this.setActivePopup}
        />
      )
    }
  }



  render() {
    return(
      <div className="main">
        {this.renderPopupIfActive(this.state.activePopup)}

        <Dashboard 
          currentUser={this.currentUser()}
          categories={this.props.entities.categories}
          projects={this.mapUserProjects()}
          setActivePopup={this.setActivePopup}
          toggleHideCategory={this.toggleHideCategory}
          hiddenCategoryIds={this.state.hiddenCategoryIds}
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