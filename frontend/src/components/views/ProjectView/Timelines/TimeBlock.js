import './TimeBlock.css'
import React from 'react'

const Timeblock = (props) => {
  const convertTimeStringToPx = (timeString) => {
    const [hrs, min] = timeString.split(":").map((s) => parseInt(s))
    const quarterHrs = min / 15
    return hrs * 80 + quarterHrs * 20
  }

  const blockStartTimeToPixelPosition = () => {
    const blockStart = convertTimeStringToPx(props.timeBlock.start_time)
    const projectStart = props.projectStart * 0.8
    return blockStart - projectStart
  }

  const blockDurationToPixelHeight = () => {
    const blockStart = convertTimeStringToPx(props.timeBlock.start_time)
    const blockEnd = convertTimeStringToPx(props.timeBlock.end_time)
    return blockEnd - blockStart
  }

  const setBlockZIndex = () => {
    return props.isMoving ? 999999 : blockStartTimeToPixelPosition() * 100
  }

  const handleMouseDown = (event) => {
    props.setControlBlock(props.timeBlock.id, event)
  }

  const addClassIfMoving = () => {
    return props.isMoving ? "moving-block" : ""
  }

  const injectStyles = () => {
    return {
      top: `${blockStartTimeToPixelPosition()}px`,
      height: `${blockDurationToPixelHeight()}px`,
      backgroundColor: `var(--option-${props.timeBlock.color})`,
      zIndex: `${setBlockZIndex()}`
    }
  }

  return(
    <div 
      className={`time-block ${addClassIfMoving()}`} 
      style={injectStyles()}
      onMouseDown={handleMouseDown}
    >
      <div className="time-block-top">
        {props.timeBlock.title}
      </div>
      <div className="time-block-resize-handle"></div>
    </div>
  )
}

export default Timeblock