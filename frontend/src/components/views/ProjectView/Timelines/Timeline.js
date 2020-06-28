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

    const blockAction = event.target.classList.contains("time-block-resize-handle") ? "resize" : "move"

    this.setState({
      controlBlock: {
        block: block,
        blockAction: blockAction,
        initialBlockPosition: block.state.topPosition,
        initialMousePosition: event.clientY,
        initialBlockHeight: block.state.blockHeight,
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
      const blockHeight = this.state.controlBlock.initialBlockHeight

      // calculate distance moved as multiple of 20 to move in increments
      const verticalDistance = mouseEnd - mouseStart
      const increments = Math.floor(verticalDistance / 20)
      const endTop = blockStart + increments * 20

      // calculate distance in px from top of timeline to last hour
      const timelineEnd = (this.props.endTime - this.props.startTime) * 0.8

      // calculate potential bottom offset of timeblock at end of movement
      const blockBottom = endTop + blockHeight

      // set state of block to isMoving true so block can apply css class
      block.setState({
        isMoving: true,
      })

      // sets state of child component, changing the block's position on screen if new position is in bounds
      if (this.state.controlBlock.blockAction === "move") {
        if (endTop >= 0 && timelineEnd >= blockBottom) {
          block.setState({
            topPosition: endTop,
            zIndex: endTop * 100,
          })
        }
      } 
      
      // sets state of child component, changing the height of the block if new height does not place block out of bounds
      if (this.state.controlBlock.blockAction === "resize") {
        // calculate new block height from initial blox height + movement increments * 20
        const endBlockHeight = blockHeight + increments * 20
        // make sure that new block height is not less than 20
        if (endBlockHeight >= 20) {
          // calculate ending block bottom from initial blockTop + new block height
          const newBlockBottom = blockStart + endBlockHeight
          // if new block bottom is in bounds, set state of child component so that it changes the height of the block
          if (newBlockBottom <= timelineEnd) {
            block.setState({
              blockHeight: endBlockHeight,
            })
          }
        }
      }

    }
  }

  // stops handleMouseMove from controlling a block by resetting to inital state value
  resetControlBlock = () => {

    const block = this.state.controlBlock.block

    if (!!block) {
      // set state of block to isMoving false so block can remove css class
      block.setState({
        isMoving: false,
      })

      this.setState({
        controlBlock: {
          block: null,
          initialBlockPosition: null,
          initialMousePosition: null,
        }
      })
    }
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