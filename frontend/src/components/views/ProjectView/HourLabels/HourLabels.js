import React from 'react'

const HourLabels = (props) => {

  const mapLabels = (props) => {
    const firstInt = props.startTime / 100
    const lastInt = props.endTime / 100
    // creates array of integers representing all hours inclusive of last hr 
    const hours = Array.from(Array(lastInt - firstInt + 1), (x, i) => i + firstInt)

    return hours.map((hr) => {
      // converts hr integer to 12hr scale with am / pm
      const hrToTwelve = (hr) => {
        if (hr < 12) {
          return `${hr} AM`
        } else {
          return hr === 12 ? `12 PM` : `${hr - 12} PM` 
        }
      } 

      return(
        <div key={hr} className="hr-label">
          {hrToTwelve(hr)}
        </div>
      )
    })
  }


  return(
    <div id="hr-labels">
      {mapLabels(props)}
    </div>
  )
}

export default HourLabels