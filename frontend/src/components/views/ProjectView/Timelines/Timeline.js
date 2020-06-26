import React, { Component } from 'react'
import TimeBlock from './TimeBlock'

class Timeline extends Component {

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

  mapTimeBlocks = (timeBlocks) => {
    return timeBlocks.allIds.map((i) => {
      return(
        <TimeBlock key={i} 
          projectStart={this.props.startTime}
          projectEnd={this.props.endTime}
          timeBlock={this.timeBlocks().byId[i]} 
        />
      )
    })
  }


  render() {
    return(
      <div className="timeline">
        { this.mapTimeBlocks(this.timeBlocks()) }
      </div>
    )
  }
}

export default Timeline