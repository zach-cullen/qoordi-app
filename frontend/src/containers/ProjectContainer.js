import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchProject } from '../actions/projectsActions'

class ProjectContainer extends Component {

  componentDidMount() {
    const projectId = this.props.match.params.id
    this.props.fetchProject({ id: projectId })
    // set state of this component to loading: true
    // display loading screen until redux store contains project with id that matches
    // then => dispatch action getProject that fetches project data from api and adds to redux store
    // 
  }

  render() {
    return(
      <div className="main">
        ProjectContainer
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.entities.projects
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