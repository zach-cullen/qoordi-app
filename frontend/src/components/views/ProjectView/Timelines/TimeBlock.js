import './TimeBlock.css'
import React from 'react'

const Timeblock = (props) => {

  const convertTimeStringToPx = (timeString) => {
    const [hrs, min] = timeString.split(":").map((s) => parseInt(s))
    const quarterHrs = min / 15
    return hrs * 80 + quarterHrs * 20
  }


  // find difference in hours between project start and timeblock start and scale to px
  const initTopPosition = () => {
    const blockStart = convertTimeStringToPx(props.timeBlock.start_time)
    const projectStart = props.projectStart * 0.8
    return blockStart - projectStart
  }

  // find difference between block start and end and scale to px
  const initBlockHeight = () => {
    const blockStart = convertTimeStringToPx(props.timeBlock.start_time)
    const blockEnd = convertTimeStringToPx(props.timeBlock.end_time)
    return blockEnd - blockStart
  }

  // multiply topPosition by 100 to calculate initial z-index setting. This will make sure blocks lower in the screen are not overlapped by those higher
  const initZIndex = () => {
    return props.isMoving ? 999999 : initTopPosition() * 100
  }

  // returns style object for injection as inline styles
  const injectStyles = () => {
    return {
      top: `${initTopPosition()}px`,
      height: `${initBlockHeight()}px`,
      backgroundColor: `var(--option-${props.timeBlock.color})`,
      zIndex: `${initZIndex()}`
    }
  }

  // passes this component and the event as values to parent component so that parent component can control this with its own mouseEvents
  // structuring this way prevents poor user experience resulting from inability to track mouse movement outside of the small amount of space block provides
  const handleMouseDown = (event) => {
    props.setControlBlock(props.timeBlock.id, event)
  }

  // returns name of css class containing styles for moving block if state of block is that it is moving
  const addClassIfMoving = () => {
    return props.isMoving ? "moving-block" : ""
  }


  return(
    <div 
      className={`time-block ${addClassIfMoving()}`} 
      style={injectStyles()}
      onMouseDown={handleMouseDown}
    >
      <div className="time-block-top"></div>
      <div className="time-block-resize-handle"></div>
    </div>
  )
}

export default Timeblock