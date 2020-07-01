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
    if (event.target.name === "startTime") {
      this.updateTimeBlockStart(event)
    }

    if (event.target.name === "endtime") {
      this.updateTimeBlockEnd(event)
    }

    this.setState({
      [event.target.name]: event.target.value
    })
  }

  setColor = (color) => {
    this.setState({
      color: color,
    })
  }

  updateTimeBlockStart = (event) => {
    const newStartTime = this.timeTwelveTo24(event.target.value) 
    const newEndTime = this.calculateNewEndTime(newStartTime)
  }

  updateTimeBlockEnd = (event) => {
    const currentStartTime = this.props.timeblock.start_time
    const newEndTime = this.timeTwelveTo24(event.target.value)
  }

  calculateNewEndTime = (startTime) => {
    return this.floatToTime(this.timeToHrsFloat(startTime) + this.calculateDurationFloat())
  }

  calculateDurationFloat = () => {
    const [startHr, startMin] = this.props.timeblock.start_time.split(":").map((s) => parseInt(s))
    const [endHr, endMin] = this.props.timeblock.end_time.split(":").map((s) => parseInt(s))
    const hrDiff = endHr - startHr
    const quarterHrsDiff = ((endMin - startMin) / 15) * 0.25
    return hrDiff + quarterHrsDiff
  }

  timeTwelveTo24 = (timeStringWithAmPM) => {
    const hrIn12 = parseInt(timeStringWithAmPM.slice(0, 2))
    const min = timeStringWithAmPM.split(":")[1].slice(0, 2)
    const isPm = () => timeStringWithAmPM.slice(-2) === "PM" && hrIn12 !== 12
    const hrIn24 = isPm() ? hrIn12 + 12 : hrIn12
    return `${hrIn24}:${min}`
  }

  timeToHrsFloat = (timeString) => {
    const [hrs, min] = timeString.split(":").map((s) => parseInt(s))
    const quarterHrs = (min / 15) * 0.25
    return hrs + quarterHrs
  }

  floatToTime = (hrsFloat) => {
    const totalQuarters = hrsFloat / 0.25
    const remainQuarters = totalQuarters % 4
    const hrs = (totalQuarters / 4) - remainQuarters * 0.25
    return `${hrs}:${remainQuarters === 0 ? "00" : remainQuarters * 15}`
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