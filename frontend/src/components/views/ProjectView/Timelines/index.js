import './Timelines.css'
import React from 'react'
import Timeline from './Timeline'

const Timelines = () => {
  return(
    <div id="timelines">
      <Timeline key={1} />
      <Timeline key={2} />
    </div>
  )
}

export default Timelines