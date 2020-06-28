import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { fetchProject } from '../actions/projectsActions'
import LoadingScreen from '../components/views/LoadingScreen'
import ProjectView from '../components/views/ProjectView'
import { selectProjectTimelines } from  '../reducers/timelinesFilters'


class ProjectContainer extends Component {

  componentDidMount() {
    const projectId = this.props.match.params.id
    // request project data for project using url params, depending on status of subsequent actions the view this component renders will change
    this.props.fetchProject({ id: projectId })
  }

  renderView = () => {
    switch(this.props.projects.loadStatus) {

      case "loading":
        return(
          <LoadingScreen />
        )
      case "failed":
        return(
          <Redirect exact to="/" />
        )
      case "complete":
        // use url match prop to pull the project that was just loaded and pass to view
        const thisProject = this.props.projects.byId[this.props.match.params.id]
        const projectTimelines = selectProjectTimelines(this.props.timelines, thisProject.id)

        return(
          <ProjectView project={thisProject} timelines={projectTimelines} />
        )
      default:
        return(
          <Redirect exact to="/" />
        )
    }
  }

  render() {
    return(
      <div className="main">
        { this.renderView() }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.entities.projects,
    timelines: state.entities.timelines,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProject: (project) => {
      dispatch(fetchProject(project))
    }
  }
} 

export default connect (mapStateToProps, mapDispatchToProps)(ProjectContainer)