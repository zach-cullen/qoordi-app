import React, { Component } from 'react'
import { connect } from 'react-redux'
import TimeBlock from './TimeBlock'

class Timeline extends Component {

  constructor() {
    super()
    this.state = {
      allTimeBlocks: this.mapTimeBlocks(this.timeBlocks()),
      controlBlock: {
        block: null,
        initialBlockPosition: null,
        initialMousePosition: null,
      },
      preventClick: false,
    }
  }

  // dummy timeBlock data in normalized redux format
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

      // prevents handleMouseUp from also triggering click event
      this.setState({
        preventClick: true,
      })

      // grab variables from state and event for easier readability
      const blockStart = this.state.controlBlock.initialBlockPosition
      const mouseStart = this.state.controlBlock.initialMousePosition
      const mouseEnd = event.clientY
      const blockHeight = this.state.controlBlock.initialBlockHeight

      // calculate distance moved as multiple of 20 to move in increments
      const verticalDistance = mouseEnd - mouseStart
      // calculate number of increments by rounding vertical distance down to nearest multiple of 20
      const increments = Math.floor(verticalDistance / 20)
      // calculate the new location of top of block
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
      // set zIndex to topMost visually while being moved (resets on mouse up)
      if (this.state.controlBlock.blockAction === "move") {
        if (endTop >= 0 && timelineEnd >= blockBottom) {
          block.setState({
            topPosition: endTop,
            zIndex: 999999,
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
              zIndex: 999999,
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
      // recalculate block's zIndex based on its final position
      block.setState({
        isMoving: false,
        zIndex: block.state.topPosition * 100,
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

  handleMouseDown = (event) => {
    if (event.target.classList.contains("timeline")) {
      // capture the amount the timeline container element has been scrolled
      const scrollAmount = document.querySelector("#project-view-content").scrollTop
      //capture distance in pixels vertically from top of timeline div
      const distanceFromTimelineStart = scrollAmount + event.clientY - event.target.offsetTop
      // round to nearest previous increment of 20
      const nearestIncrement = distanceFromTimelineStart - distanceFromTimelineStart % 20
      // convert nearest increment to a time based on project start 
      // 1.25 represents the conversion from 80px scale to 100 scale
      const timeBlockStart = this.props.startTime + nearestIncrement * 1.25
      this.createTimeBlock(timeBlockStart)
    }
  }

  // creates newTimeBlock object as proxy for future persisted timeBlock
  createTimeBlock = (startTime) => {
    // creates as 15 min block by default
    const newTimeBlock = {
      id: "new",
      start: startTime,
      end: startTime + 25,
      color: "blue",
    }
    // add newTimeBlock to state to render in timeline
    this.setState({
      allTimeBlocks: this.state.allTimeBlocks.concat(newTimeBlock)
    })

    // calling prop this function with argument of "new" makes side bar display form
    this.props.setSideBarBlockId(newTimeBlock.id)
  }

  // maps TimeBlock components from normalized object to array of objects
  mapTimeBlocks = (timeBlocks) => {
    return timeBlocks.allIds.map((i) => timeBlocks.byId[i])
  }

  // renders TimeBlock components from array of timeblocks in state
  renderTimeBlocks = () => {
    return this.state.allTimeBlocks.map((timeBlock) => {
      return(
        <TimeBlock key={timeBlock.id} 
          setControlBlock={this.setControlBlock}
          handleClick={this.handleClick}
          projectStart={this.props.startTime}
          projectEnd={this.props.endTime}
          timeBlock={timeBlock} 
        />
      )
    })
  }

  // maintain cursor resize while dragging and cursor moves off edge of block
  injectStyles = () => {
    if (!!this.state.controlBlock.block) {
      return {
        cursor: "ns-resize",
      }
    }

  }

  render() {
    return(
      <div 
        className="timeline"
        onMouseDown={this.handleMouseDown}
        onClick={this.handleClick}
        onMouseMove={this.handleMouseMove}
        onMouseLeave={this.resetControlBlock}
        onMouseUp={this.resetControlBlock}
        style={this.injectStyles()}
      >
        { this.renderTimeBlocks() }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    timeblocks: state.entities.timeblocks,
  }
}

export default connect(mapStateToProps)(Timeline)