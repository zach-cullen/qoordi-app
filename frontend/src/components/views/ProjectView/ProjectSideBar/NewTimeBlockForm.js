import React, { Component } from 'react'

class NewTimeBlockForm extends Component {

  constructor() {
    super()
    this.state = {
      title: "",
      description: "",
    }
  }

  render() {
    return(
      <div className="sidebar-form" id="new-time-block-form">
        <div className="sidebar-form-header">
          New Event
        </div>
        <form className="sidebar-form-container">
          <label>
            TITLE
            <input 
              type="text" name="title"
              onChange={this.handleChange} 
              value={this.state.title} 
              placeholder="Add Title"
              autofocus="true"
            />
          </label>
          <br />
          <label>
            DESCRIPTION
            <textarea 
              type="text-area" name="description"
              onChange={this.handleChange} 
              value={this.state.description} 
              placeholder="Add Description"
            />
          </label>
        </form>
      </div>
    )
  }

}

export default NewTimeBlockForm