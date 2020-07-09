import React, { Component } from 'react'

class UpdateProjectForm extends Component {

  render() {
    return(
      <div className="sidebar-form" id="update-project-form">
        <h6>PROJECT</h6>
        <h4>{ this.props.project.title }</h4>
      </div>
    )
  }
}

export default UpdateProjectForm