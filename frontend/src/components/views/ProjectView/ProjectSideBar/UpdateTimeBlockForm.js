import React, { Component } from 'react'
import ColorSelector from '../../PopUpForm/ColorSelector/ColorSelector'
import { updateTimeBlock } from '../../../../actions/timeblocksActions'

class UpdateTimeBlockForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      title: props.timeblock.title,
      description: props.timeblock.description,
      color: props.timeblock.color,
      startTime: this.time24to12(props.timeblock.start_time),
      endTime: this.time24to12(props.timeblock.end_time),
      editDescription: false,
      formEdited: false,
      showColorOptions: false,
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const updatedTimeBlock = {
      id: this.props.timeblock.id,
      timeline_id: this.props.timeblock.timeline_id,
      title: this.state.title,
      description: this.state.description,
      color: this.state.color,
      start_time: this.props.timeblock.start_time,
      end_time: this.props.timeblock.end_time,
    }

    updateTimeBlock(updatedTimeBlock)
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

  toggleEditDescription = (event) => {
    event.preventDefault()
    this.setState({
      editDescription: !this.state.editDescription,
    })
  } 

  renderDescription = (boolean) => {
    if (boolean === true) {
      return (
        <textarea 
          type="text-area" name="description"
          onChange={this.handleChange} 
          value={this.state.description} 
          placeholder="Add Description"
          autoFocus={true}
          onBlur={this.toggleEditDescription}
        />
      )
    }

    return(
      <p onClick={this.toggleEditDescription}>
        {this.props.timeblock.description}
      </p>
    )
  }

  showButtonIfUpdated = () => {
    if (this.state.formEdited === true) {
      return(
        <button 
        type="submit" 
        className="form-btn form-btn-enabled"
      >
        Save Changes
      </button>
      )
    }
  }


  handleChange = (event) => {
    if (this.state.formEdited === false) {
      this.setState({
        formEdited: true,
      })
    }
    this.setState({
      [event.target.name]: event.target.value
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
      showColorOptions: true,
    })
  }

  setColor = (color) => {
    if (this.state.formEdited === false) {
      this.setState({
        formEdited: true,
      })
    }
    this.setState({
      color: color,
    })
  }


  render() {
    return(
      <div 
        className="sidebar-form" id="update-time-block-form"
      >
        <form 
          className="sidebar-form-container"
          onClick={this.closeColorOptions}
          onSubmit={this.handleSubmit}
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
            DESCRIPTION
            {this.renderDescription(this.state.editDescription)}
          </label>

          <label>
            COLOR
            <ColorSelector 
              selectedColor={this.state.color}
              showColorOptions={this.state.showColorOptions}
              openColorOptions={this.openColorOptions}
              setColor={this.setColor}
            />
          </label>

          { this.showButtonIfUpdated() }
        </form>
      </div>
    )
  }

}


export default UpdateTimeBlockForm