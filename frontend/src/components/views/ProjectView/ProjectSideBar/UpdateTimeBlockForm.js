import React, { Component } from 'react'
import ColorSelector from '../../PopUpForm/ColorSelector/ColorSelector'

class UpdateTimeBlockForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      title: props.timeblock.title,
      description: props.timeblock.description,
      color: props.timeblock.color,
      startTime: this.time24to12(props.timeblock.start_time),
      endTime: this.time24to12(props.timeblock.end_time),
    }
  }


  time24to12 = (timeString) => {
    const [hr, min] = timeString.split(":").map((s) => parseInt(s))
    const zeroPadMin = min === 0 ? "00" : min    
    const hrTo12 = hr <= 12 ? hr.toString() : (hr - 12).toString()

    // returns string representing hour in am / pm 12 hr scale
    const amOrPm = () => {
      if (hr < 12) {
        return "AM"
      }
      if (hr === 24) {
        return "AM"
      }
      return "PM"
    }

    return `${hrTo12}:${zeroPadMin} ${amOrPm()}`
  }


  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return(
      <div 
        className="sidebar-form" id="update-time-block-form"
      >
        <form 
          className="sidebar-form-container"
        >
          <label>
            NEW EVENT
            <input 
              type="text" name="title" id="sidebar-form-title-input"
              onChange={this.handleChange} 
              value={this.state.title} 
              placeholder="Add Title"
            />
          </label>
          <br />

          <div>
            <h6>TIME</h6>
            <p>{this.state.startTime} - {this.state.endTime}</p>
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
        </form>
      </div>
    )
  }

}


export default UpdateTimeBlockForm