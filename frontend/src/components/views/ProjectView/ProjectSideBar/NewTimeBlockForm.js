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
      durationHrs: "00",
      durationMins: "15",
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
              <TimeSelector start={this.props.project.st} />
            </label>

            <label>
              END TIME
              <br />
              <TimeSelector start={this.props.project.st} />
            </label>
          </div>


          <label>
            DURATION
            <br />
            <select 
              name="durationHrs" 
              onChange={this.handleChange}
              value={this.state.durationHrs}
            >
              <option value="00">00</option>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
            </select>
            <span>HRS </span>
            <select 
              name="durationMins" 
              onChange={this.handleChange}
              value={this.state.durationMins}
            >
              <option value="00">00</option>
              <option value="15">15</option>
              <option value="30">30</option>
              <option value="45">45</option>
            </select>
            <span>MIN </span>
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