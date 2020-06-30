import './Timelines.css'
import React from 'react'
import Timeline from './Timeline'

const Timelines = (props) => {

  const renderTimelines = (props) => {
    return props.timelines.map((timeline) => {
      return(
        <Timeline 
          timeline={timeline}
          key={timeline.id} 
          startTime={props.startTime} 
          endTime={props.endTime} 
          setSideBarBlockId={props.setSideBarBlockId}
        />
      )
    })
  }

  return(
    <div id="timelines">
      { renderTimelines(props) }
    </div>
  )
}

export default Timelines