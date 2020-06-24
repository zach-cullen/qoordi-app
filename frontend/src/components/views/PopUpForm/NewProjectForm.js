import React, { Component } from 'react'

class NewProjectForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log("submit new project!")
  }

  // returns boolean whether user has filled in title. Used for rendering button and preventing submit of incomplete form
  checkForTitle = () => {
    return !!this.state.title
  }

  // renders button with enabled / disabled css class dependent on checkForTitle function
  renderButtonMode = () => {
    return(
      <button className={`form-btn ${this.checkForTitle() ? "form-btn-enabled" : "form-btn-disabled"}`} type="submit">Save</button>
    )
  }


  render() {
    return(
      <div 
        className="large-form popup-form"
      >
        <div className="large-form-header">New Project</div>
        <form id="new-project-form" onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input 
              type="text" name="title"
              onChange={this.handleChange} 
              value={this.state.title} 
            />
          </label>
          <br/>
          { this.renderButtonMode() }
        </form>
      </div>
    )
  }
}

export default NewProjectForm