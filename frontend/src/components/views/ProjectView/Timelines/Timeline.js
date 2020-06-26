import React, { Component } from 'react'
import TimeBlock from './TimeBlock'

class Timeline extends Component {

  constructor() {
    super()
    this.state = {
      controlBlock: {
        block: null,
        initialBlockPosition: null,
        initialMousePosition: null,
      }
    }
  }

  timeBlocks = () => {
    return {
      byId: {
        1: {
          id: 1,
          start: 950,
          end: 1050,
          color: "pink"
        },
        2: {
          id: 2,
          start: 1100,
          end: 1150,
          color: "blue",
        },
        3: {
          id: 3,
          start: 1300,
          end: 1450,
          color: "orange",
        }
      },
      allIds: [1, 2, 3]
    }
  }

  // sets controlBlock to the TimeBlock that triggered event and stores initial values for movement calculations
  setControlBlock = (block, event) => {
    this.setState({
      controlBlock: {
        block: block,
        initialBlockPosition: block.state.topPosition,
        initialMousePosition: event.clientY
      }
    })
  }

  // moves child element according to mouse movement if it has been selected
  handleMouseMove = (event) => {
    let block = this.state.controlBlock.block

    if (!!block) {
      const blockStart = this.state.controlBlock.initialBlockPosition
      const mouseStart = this.state.controlBlock.initialMousePosition
      const mouseEnd = event.clientY

      // calculate distance moved as multiple of 20 to move in increments
      const verticalDistance = mouseEnd - mouseStart
      const increments = Math.floor(verticalDistance / 20)
      const endTop = blockStart + increments * 20
      
      // sets state of child component, changing the block's position on screen
      block.setState({
        topPosition: endTop,
      })
    }
  }

  // stops handleMouseMove from controlling a block by resetting to inital state value
  resetControlBlock = () => {
    this.setState({
      controlBlock: {
        block: null,
        initialBlockPosition: null,
        initialMousePosition: null,
      }
    })
  }

  // maps TimeBlock components from data
  mapTimeBlocks = (timeBlocks) => {
    return timeBlocks.allIds.map((i) => {
      return(
        <TimeBlock key={i} 
          setControlBlock={this.setControlBlock}
          handleClick={this.handleClick}
          projectStart={this.props.startTime}
          projectEnd={this.props.endTime}
          timeBlock={this.timeBlocks().byId[i]} 
        />
      )
    })
  }

  render() {
    return(
      <div 
        className="timeline"
        onMouseMove={this.handleMouseMove}
        onMouseLeave={this.resetControlBlock}
        onMouseUp={this.resetControlBlock}
      >
        { this.mapTimeBlocks(this.timeBlocks()) }
      </div>
    )
  }
}

export default Timeline