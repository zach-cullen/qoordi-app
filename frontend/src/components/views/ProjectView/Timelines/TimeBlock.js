import React, { Component } from 'react'

class Timeblock extends Component {

  constructor(props) {
    super(props)
    this.state = {
      topPosition: this.initTopPosition(),
      mouse: {
        mouseIsDown: false,
        mouseStart: null,
        blockStart: null,
      }
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
    this.setState({
      mouse: {
        ...this.state.mouse,
        mouseIsDown: true,
        mouseStart: event.clientY,
        blockStart: event.target.offsetTop
      }
    })
  }

  handleMouseMove = (event) => {
    if (this.state.mouse.mouseIsDown) {
      const blockStart = this.state.mouse.blockStart
      const mouseStart = this.state.mouse.mouseStart
      const mouseEnd = event.clientY
      const verticalDistance = mouseEnd - mouseStart

      // calculate distance moved as multiple of 15 to move by chunks
      let quarterHours = Math.floor(verticalDistance / 20) + 1
      let endTop = blockStart + quarterHours * 20
      
      // move by multiple of 15 within bounds of parent element
      if (Math.abs(verticalDistance) > 0) {
        console.log(quarterHours)
        this.setState({
          topPosition: endTop,
        })
      } 
    }
  }


  handleMouseUp = (event) => {
    this.resetMouseAttributes()
  }

  handleMouseOut = (event) => {
    this.resetMouseAttributes()
  }

  resetMouseAttributes = () => {
    this.setState({
      mouse: {
        ...this.state.mouse,
        mouseIsDown: false,
        mouseStart: null,
      }
    })
  }

  render() {
    return(
      <div 
        className="time-block" 
        style={this.injectStyles()}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
        onMouseMove={this.handleMouseMove}
        onMouseOut={this.handleMouseOut}
      >
      </div>
    )
  }
}

export default Timeblock