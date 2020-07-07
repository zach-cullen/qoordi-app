import React, { Component } from 'react'
import { connect } from 'react-redux'
import ColorSelector from '../../PopUpForm/ColorSelector/ColorSelector'
import TimeSelector from './TimeSelector'
import { proxyUpdateTimeBlockTimes, proxyUpdateTimeBlockTitle, updateNewTimeBlockColor, createTimeBlock, deleteNewTimeBlock} from '../../../../actions/timeblocksActions'

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

    if (event.target.name === "endTime") {
      this.updateTimeBlockEnd(event)
    }

    if (event.target.name === "title") {
      this.updateTimeBlockTitle(event.target.value)
    }

    this.setState({
      [event.target.name]: event.target.value
    })
  }

  setColor = (color) => {
    this.setState({
      color: color,
    })

    this.props.updateNewTimeBlockColor(color)

  }

  updateTimeBlockTitle = (title) => {
    this.props.proxyUpdateTimeBlockTitle(this.props.timeblock.id, title)
  }

  updateTimeBlockStart = (event) => {
    const newStartTime = this.timeTwelveTo24(event.target.value) 
    const newEndTime = this.calculateNewEndTime(newStartTime)
    this.props.proxyUpdateTimeBlockTimes(this.props.timeblock.id, newStartTime, newEndTime)
  }

  updateTimeBlockEnd = (event) => {
    const currentStartTime = this.props.timeblock.start_time
    const newEndTime = this.timeTwelveTo24(event.target.value)
    this.props.proxyUpdateTimeBlockTimes(this.props.timeblock.id, currentStartTime, newEndTime)
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

  submitAllowed = () => {
    return !!this.state.title
  }

  handleSubmit = (event) => {
    event.preventDefault()

    if (this.submitAllowed()) {

      const newTimeBlock = {
        timeline_id: this.props.timeblock.timeline_id,
        start_time: this.props.timeblock.start_time,
        end_time: this.props.timeblock.end_time,
        color: this.props.timeblock.color,
        title: this.state.title,
        description: this.state.description,
      }
      
      this.props.setSideBarBlockId(null)
      this.props.createTimeBlock(newTimeBlock)
    } 
  }

  discardNewEvent = () => {
    this.props.setSideBarBlockId(null)
    this.props.deleteNewTimeBlock()
  }

  render() {
    return(
      <div 
        className="sidebar-form" id="new-time-block-form"
        onClick={this.closeColorOptions}
      >
        <form 
          className="sidebar-form-container"
          onSubmit={this.handleSubmit}
        >

          <div className="sidebar-split-even">
            <button
              className="sm-sidebar-btn"
              onClick={ this.discardNewEvent }
            >
              Discard Event
            </button>
            <button 
              type="submit" 
              className={`sm-sidebar-btn ${this.submitAllowed() ? "form-btn-enabled" : "form-btn-disabled"}`}
              disabled={!this.submitAllowed()}
            >
              Save Event
            </button>
          </div>

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
        </form>
      </div>
    )
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    createTimeBlock: (timeBlockData) => {
      dispatch(createTimeBlock(timeBlockData))
    },
    proxyUpdateTimeBlockTimes: (id, startTime, endTime) => {
      dispatch(proxyUpdateTimeBlockTimes(id, startTime, endTime))
    },
    updateNewTimeBlockColor: (color) => {
      dispatch(updateNewTimeBlockColor(color))
    },
    proxyUpdateTimeBlockTitle: (id, title) => {
      dispatch(proxyUpdateTimeBlockTitle(id, title))
    },
    deleteNewTimeBlock: () => {
      dispatch(deleteNewTimeBlock())
    },
  }
}

export default connect(null, mapDispatchToProps)(NewTimeBlockForm)