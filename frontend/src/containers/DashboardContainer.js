import React, { Component } from 'react'
import { connect } from 'react-redux'
import queryString from 'query-string'
import { fetchUser } from '../actions/usersActions'
import Dashboard from '../components/views/Dashboard'
import PopUpForm from '../components/views/PopUpForm'

class DashboardContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      activePopup: "",
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

  // returns array of all hidden category ids parsed from url query parameter string
  hiddenCategoryIds = () => {
    let hiddenCategoryIds = []
    // parse object containing all query params using queryString library
    const params = queryString.parse(this.props.location.search)
    // return empty array if no hidden category params exist
    if (!params.hideCat) { return hiddenCategoryIds }
    // map category ids to integer array
    return hiddenCategoryIds.concat(params.hideCat).map((idString) => parseInt(idString))
  }

  // transforms projects object normalized for redux to an array of objects
  mapUserProjects = () => {
    const projects = this.props.entities.projects
    const projectsArray = projects.allIds.map((id) => projects.byId[id])
    return this.sortProjectsByDateAsc(this.filterHiddenProjects(projectsArray))
  }

  // takes array of projets and removes projects with categories contained in hidden category array (in state)
  filterHiddenProjects = (projectsArray) => {
    return projectsArray.filter((project) => !this.hiddenCategoryIds().includes(project.category_id))
  }

  // takes an array of projects and returns an array of same projects sorted by date in ascending order
  sortProjectsByDateAsc = (projectsArray) => {
    // converts dateString ISO format "yyyy-mm-dd" to integer of same digits
    const dateToInt = (project) => parseInt(project.date.split("-").join(""))
    // return array sorted by date in ascending order using ISO date to integer function
    return projectsArray.sort((a, b) => dateToInt(a) - dateToInt(b))
  }

  // when called uses string variable passed in to set state, rendering a form specific to the passed in title
  setActivePopup = (popUpTitle) => {
    this.setState({
      ...this.state,
      activePopup: popUpTitle,
    })
  } 

  // render popup with prop selecting specific form based on the string if state is not null
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
          hiddenCategoryIds={this.hiddenCategoryIds()}
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