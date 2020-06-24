import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchProject } from '../actions/projectsActions'
import LoadingScreen from '../components/views/LoadingScreen'

class ProjectContainer extends Component {

  componentDidMount() {
    const projectId = this.props.match.params.id
    this.props.fetchProject({ id: projectId })
    // set state of this component to loading: true
    // display loading screen until redux store contains project with id that matches
    // then => dispatch action getProject that fetches project data from api and adds to redux store
    // 
  }

  renderView = () => {
    if (this.props.projects.loading) {
      return(
        <LoadingScreen />
      )
    }

    return(
      <div className="main">
        <h1>Project</h1>
      </div>
    )
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