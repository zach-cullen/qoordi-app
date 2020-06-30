import React, { Component } from 'react'
import ColorSelector from '../../PopUpForm/ColorSelector/ColorSelector'
import TimeDataList from './TimeDataList'

class NewTimeBlockForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      title: "",
      description: "",
      color: "blue",
      showColorOptions: false,
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  setColor = (color) => {
    this.setState({
      color: color,
    })
  }

  // hides ColorSelector options only if click target is not a color-option div
  closeColorOptions = (event) => {
    if (!event.target.classList.contains("selected-color-option")) {
      this.setState({ showColorOptions: false})
    }
  }

  // alters state passed as prop to ColorSelector so that it reveals color options
  openColorOptions = () => {
    this.setState({ 
      ...this.state,
      showColorOptions: true,
    })
  }

  render() {
    return(
      <div 
        className="sidebar-form" id="new-time-block-form"
        onClick={this.closeColorOptions}
      >
        <form className="sidebar-form-container">
          <label>
            NEW EVENT
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
            START
            <input list="times" />
              <TimeDataList start={this.props.project.st}/>
          </label>
          <br />
          <label>
            COLOR
            <ColorSelector 
              selectedColor={this.state.color}
              showColorOptions={this.state.showColorOptions}
              openColorOptions={this.openColorOptions}
              setColor={this.setColor}
            />
          </label>
          <label>
            DESCRIPTION
            <textarea 
              type="text-area" name="description"
              onChange={this.handleChange} 
              value={this.state.description} 
              placeholder="Add Description"
            />
          </label>
          <button type="submit" className="form-btn form-btn-disabled">
            Save Event
          </button>
        </form>
      </div>
    )
  }

}

export default NewTimeBlockForm