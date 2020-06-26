import './Timelines.css'
import React from 'react'
import Timeline from './Timeline'

const Timelines = (props) => {
  return(
    <div id="timelines">
      <Timeline key={1} startTime={props.startTime} endTime={props.endTime} />
      <Timeline key={2} startTime={props.startTime} endTime={props.endTime} />
    </div>
  )
}

export default Timelines