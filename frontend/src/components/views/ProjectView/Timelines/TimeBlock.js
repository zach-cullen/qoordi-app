import React, { Component } from 'react'

class Timeblock extends Component {

  constructor(props) {
    super(props)
    this.state = {
      topPosition: this.initTopPosition(),
      blockHeight: this.initBlockHeight(),
      isMoving: false,
    }
  }

  // scales hours (100) to pixels (80px / hr)
  scaleHrsToPx = (int) => {
    return int * 0.8
  }

  // find difference in hours between project start and timeblock start and scale to px
  initTopPosition = () => {
    return this.scaleHrsToPx(this.props.timeBlock.start - this.props.projectStart)
  }

  // find difference between block start and end and scale to px
  initBlockHeight = () => {
    return this.scaleHrsToPx(this.props.timeBlock.end - this.props.timeBlock.start)
  }


  // returns style object for injection as inline styles
  injectStyles = () => {
    return {
      top: `${this.state.topPosition}px`,
      height: `${this.state.blockHeight}px`,
      backgroundColor: `var(--option-${this.props.timeBlock.color})`,
    }
  }

  // passes this component and the event as values to parent component so that parent component can control this with its own mouseEvents
  // structuring this way prevents poor user experience resulting from inability to track mouse movement outside of the small amount of space block provides
  handleMouseDown = (event) => {
    this.props.setControlBlock(this, event)
  }

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
      </div>
    )
  }
}

export default Timeblock