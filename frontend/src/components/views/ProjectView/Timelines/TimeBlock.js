import React, { Component } from 'react'

class Timeblock extends Component {

  constructor(props) {
    super(props)
    this.state = {
      topPosition: this.initTopPosition(),
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
      height: `${this.initBlockHeight()}px`,
      backgroundColor: `var(--option-${this.props.timeBlock.color})`,
    }
  }

  handleMouseDown = (event) => {
    this.props.setControlBlock(this, event)
  }

  render() {
    return(
      <div 
        className="time-block" 
        style={this.injectStyles()}
        onClick={this.handleClick}
        onMouseDown={this.handleMouseDown}
      >
      </div>
    )
  }
}

export default Timeblock