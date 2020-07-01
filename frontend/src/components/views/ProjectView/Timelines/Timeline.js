import React, { Component } from 'react'
import { connect } from 'react-redux'
import TimeBlock from './TimeBlock'
import { selectTimelineTimeBlocks } from '../../../../reducers/timeblocksFilters'
import { addNewTimeBlock, deleteNewTimeBlock, proxyUpdateTimeBlockTimes } from '../../../../actions/timeblocksActions'

class Timeline extends Component {

  constructor(props) {
    super(props)
    this.state = {
      controlBlock: {
        active: false,
      },
      preventClick: false,
    }
  }


  // sets controlBlock blockId to the TimeBlock that triggered event and stores initial values for movement calculations
  setControlBlock = (blockId, event) => {
    const controlType = event.target.classList.contains("time-block-resize-handle") ? "resize" : "move"
    this.setState({
      controlBlock: {
        active: true,
        blockId: blockId,
        controlType: controlType,
        initialMousePosition: event.clientY,
        initialBlockPosition: event.target.parentElement.offsetTop,
        initialBlockHeight: event.target.parentElement.offsetHeight,
      }
    })
    // display selected block info in side bar
    this.props.setSideBarBlockId(blockId)
    if (blockId !== 0) {
      this.props.dispatch(deleteNewTimeBlock())
    }
  }

  // moves child element according to mouse movement if it has been selected
  handleMouseMove = (event) => {

    if (this.state.controlBlock.active) {
      // prevents handleMouseUp from also triggering click event
      this.setState({
        preventClick: true,
      })

      // cache variables from state and event for easier readability
      const blockStart = this.state.controlBlock.initialBlockPosition
      const blockHeight = this.state.controlBlock.initialBlockHeight
      const mouseStart = this.state.controlBlock.initialMousePosition
      const mouseEnd = event.clientY

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


      // sets state of child component, changing the block's position on screen if new position is in bounds
      // set zIndex to topMost visually while being moved (resets on mouse up)
      if (this.state.controlBlock.controlType === "move") {
        if (endTop >= 0 && timelineEnd >= blockBottom) {
        const projectStartOffset = this.props.startTime * 0.8
        // calculate time strings from top position of block and block height
        const currentStartTime = this.convertPxToTimeString(projectStartOffset + endTop)
        const currentEndTime = this.convertPxToTimeString(projectStartOffset + endTop + this.state.controlBlock.initialBlockHeight)
        // dispatch update to new block times
        this.props.dispatch(proxyUpdateTimeBlockTimes(this.state.controlBlock.blockId, currentStartTime, currentEndTime))
        }
      } 
      
      // sets state of child component, changing the height of the block if new height does not place block out of bounds
      if (this.state.controlBlock.controlType === "resize") {
        // calculate new block height from initial blox height + movement increments * 20
        const endBlockHeight = blockHeight + increments * 20
        // make sure that new block height is not less than 20
        if (endBlockHeight >= 20) {
          // calculate ending block bottom from initial blockTop + new block height
          const newBlockBottom = blockStart + endBlockHeight
          // if new block bottom is in bounds, set state of child component so that it changes the height of the block
          if (newBlockBottom <= timelineEnd) {

            const projectStartOffset = this.props.startTime * 0.8
            // calculate initial start time
            const currentStartTime = this.convertPxToTimeString(projectStartOffset + blockStart)
            // calculate new end time and dispatch update
            const currentEndTime = this.convertPxToTimeString(projectStartOffset + newBlockBottom)

            this.props.dispatch(proxyUpdateTimeBlockTimes(this.state.controlBlock.blockId, currentStartTime, currentEndTime))
          }
        }
      }

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
      this.props.dispatch(addNewTimeBlock(this.props.timeline.id, this.convertPxToTimeString(startTimeInPx), this.convertPxToTimeString(endTimeInPx)))
      this.props.setSideBarBlockId(0)
    }
  }

  handleMoveEnd = () => {
    if (this.state.controlBlock.active) {
      // removes block from state and resets moving css styles
      this.resetControlBlock()
    }
  }

  // reset state so that no block is being controlled by functions
  resetControlBlock = () => {
    this.setState({
      controlBlock: {
        active: false,
      }
    })

  }

  // takes a pixel value and converts to a time string
  convertPxToTimeString = (px) => {
    const hrs = Math.floor(px / 80)
    const quarterHrs = (px / 80 - hrs) / 0.25 
    const zeroPadHrs = hrs < 10 ? `0${hrs}` : hrs
    const mins = quarterHrs * 15 === 0 ? "00" : `${quarterHrs * 15}`
    return `${zeroPadHrs}:${mins}`
  }

  // maps TimeBlock components from normalized object to array of objects
  mapTimeBlocks = () => {
    return selectTimelineTimeBlocks(this.props.timeBlocks, this.props.timeline.id)
  }

  blockIsMoving = (timeBlockId) => {
   return this.state.controlBlock.blockId === timeBlockId
  }

  // renders TimeBlock components from array of timeblocks in state
  renderTimeBlocks = () => {
    return this.mapTimeBlocks().map((timeBlock) => {
      return(
        <TimeBlock key={timeBlock.id} 
          isMoving={this.blockIsMoving(timeBlock.id)}
          setControlBlock={this.setControlBlock}
          projectStart={this.props.startTime}
          projectEnd={this.props.endTime}
          timeBlock={timeBlock} 
        />
      )
    })
  }

  // maintain cursor resize while dragging and cursor moves off edge of block
  injectStyles = () => {
    if (this.state.controlBlock.active) {
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
        onMouseMove={this.handleMouseMove}
        onMouseLeave={this.handleMoveEnd}
        onMouseUp={this.handleMoveEnd}
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