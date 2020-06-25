import React from 'react'
import TimeBlock from './TimeBlock'

const Timeline = () => {

  const timeBlocks = {
    byId: {
      1: {
        id: 1,
        start: 950,
        end: 1050,
      },
      2: {
        id: 2,
        start: 1100,
        end: 1150,
      },
      3: {
        id: 3,
        start: 1300,
        end: 1450,
      }
    },
    allIds: [1, 2, 3]
  }

  const mapTimeBlocks = (timeBlocks) => {
    return timeBlocks.allIds.map((i) => {
      return(
        <TimeBlock key={i} timeBlock={timeBlocks.byId[i]} />
      )
    })
  }



  return(
    <div className="timeline">
      { mapTimeBlocks(timeBlocks) }
    </div>
  )
}

export default Timeline