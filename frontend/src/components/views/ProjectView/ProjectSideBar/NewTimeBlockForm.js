import React, { Component } from 'react'
import ColorSelector from '../../PopUpForm/ColorSelector/ColorSelector'
import TimeSelector from './TimeSelector'

class NewTimeBlockForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      title: "",
      description: "",
      color: "blue",
      startTime: "",
      endTime: "",
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
              type="text" name="title" id="sidebar-form-title-input"
              onChange={this.handleChange} 
              value={this.state.title} 
              placeholder="Add Title"
              autoFocus
            />
          </label>
          <br />

          <div className="sidebar-split-even">
            <label>
              START TIME
              <br />
              <TimeSelector
                startTime={this.props.timeblock.start_time}
                endTime={this.props.timeblock.end_time}
                name={"startTime"}
                handleChange={this.handleChange}
              />
            </label>

            <label>
              END TIME
              <br />
              <TimeSelector 
                startTime={this.props.timeblock.start_time}
                endTime={this.props.timeblock.end_time}
                name={"endTime"}
                handleChange={this.handleChange}
              />
            </label>
          </div>

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