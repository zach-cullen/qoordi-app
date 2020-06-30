import React, { Component } from 'react'
import { connect } from 'react-redux'
import TimeBlock from './TimeBlock'
import { addNewTimeBlock } from '../../../../actions/timeblocksActions'

class Timeline extends Component {

  constructor(props) {
    super(props)
    this.state = {
      controlBlock: {
        block: null,
        initialBlockPosition: null,
        initialMousePosition: null,
      },
      preventClick: false,
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
      //capture vertical distance of click event from top of timeline div
      const distanceFromTimelineStart = scrollAmount + event.clientY - event.target.offsetTop
      // round to nearest previous increment of 20
      const nearestIncrement = distanceFromTimelineStart - distanceFromTimelineStart % 20
      // converts startTime from 100 to 80px scale and adds click offset from startTime
      const startTimeInPx = (this.props.startTime * 0.8) + nearestIncrement
      // default make endTime 15 min after start
      const endTimeInPx = startTimeInPx + 20
      // passes time string to createTimeBlock, adding new timeblock to timeline at click location
      // this.createTimeBlock(this.convertPxToTimeString(startTimeInPx), this.convertPxToTimeString(endTimeInPx))
      this.props.dispatch(addNewTimeBlock(this.convertPxToTimeString(startTimeInPx), this.convertPxToTimeString(endTimeInPx)))
      this.props.setSideBarBlockId("new")
    }
  }

  convertPxToTimeString = (px) => {
    const hrs = Math.floor(px / 80)
    const quarterHrs = (px / 80 - hrs) / 0.25 
    const zeroPadHrs = hrs < 10 ? `0${hrs}` : hrs
    return `${zeroPadHrs}:${quarterHrs * 15}`
  }

  // maps TimeBlock components from normalized object to array of objects
  mapTimeBlocks = (timeBlocks) => {
    return timeBlocks.allIds.map((i) => timeBlocks.byId[i])
  }

  // renders TimeBlock components from array of timeblocks in state
  renderTimeBlocks = () => {
    return this.mapTimeBlocks(this.props.timeBlocks).map((timeBlock) => {
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
    timeBlocks: state.entities.timeblocks,
  }
}

export default connect(mapStateToProps)(Timeline)