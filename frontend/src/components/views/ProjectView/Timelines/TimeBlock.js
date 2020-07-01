import './TimeBlock.css'
import React, { Component } from 'react'

class Timeblock extends Component {

  constructor(props) {
    super(props)
    this.state = {
      id: props.timeBlock.id,
      topPosition: this.initTopPosition(),
      blockHeight: this.initBlockHeight(),
      isMoving: false,
      zIndex: this.initZIndex(),
    }
  }

  convertTimeStringToPx = (timeString) => {
    const [hrs, min] = timeString.split(":").map((s) => parseInt(s))
    const quarterHrs = min / 15
    return hrs * 80 + quarterHrs * 20
  }


  // find difference in hours between project start and timeblock start and scale to px
  initTopPosition = () => {
    const blockStart = this.convertTimeStringToPx(this.props.timeBlock.start_time)
    const projectStart = this.props.projectStart * 0.8
    return blockStart - projectStart
  }

  // find difference between block start and end and scale to px
  initBlockHeight = () => {
    const blockStart = this.convertTimeStringToPx(this.props.timeBlock.start_time)
    const blockEnd = this.convertTimeStringToPx(this.props.timeBlock.end_time)
    return blockEnd - blockStart
  }

  // multiply topPosition by 100 to calculate initial z-index setting. This will make sure blocks lower in the screen are not overlapped by those higher
  initZIndex = () => {
    return this.initTopPosition() * 100
  }

  // returns style object for injection as inline styles
  injectStyles = () => {
    return {
      top: `${this.initTopPosition()}px`,
      height: `${this.initBlockHeight()}px`,
      backgroundColor: `var(--option-${this.props.timeBlock.color})`,
      zIndex: `${this.state.zIndex}`
    }
  }

  // passes this component and the event as values to parent component so that parent component can control this with its own mouseEvents
  // structuring this way prevents poor user experience resulting from inability to track mouse movement outside of the small amount of space block provides
  handleMouseDown = (event) => {
    this.props.setControlBlock(this, event)
  }

  // returns name of css class containing styles for moving block if state of block is that it is moving
  addClassIfMoving = () => {
    return this.state.isMoving ? "moving-block" : ""
  }

  render() {
    return(
      <div 
        className={`time-block ${this.addClassIfMoving()}`} 
        style={this.injectStyles()}
        onClick={this.handleClick}
        onMouseDown={this.handleMouseDown}
      >
        <div className="time-block-top"></div>
        <div className="time-block-resize-handle"></div>
      </div>
    )
  }
}

export default Timeblock