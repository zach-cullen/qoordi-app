import React from 'react'

const TimeSelector = (props) => {

  // fake props from project
  const startTime = "09:00"
  const endTime = "23:00"

  const renderOptions = () => {

    // parse start and end hr integers from strings
    const startHr = parseInt(startTime.slice(0, 2))
    const endHr = parseInt(endTime.slice(0, 2))

    // create array of integers representing each hour from start to end (inclusive)
    const hrsArray = Array.from(Array(endHr - startHr + 1), (x, i) => i + startHr)

    // create array of time strings from start time to end time
    const hrsToTimes = () => {
      return hrsArray.map((hr, i) => {
        // convert hr (24 hr scale) to 12hr time scale and make string
        const hrTo12 = hr <= 12 ? hr.toString() : (hr - 12).toString()

        // returns string representing hour in am / pm 12 hr scale
        const amOrPm = () => {
          if (hr < 12) {
            return "AM"
          }
          if (hr === 24) {
            return "AM"
          }
          return "PM"
        }

        // return only hour if last hr
        if (i === hrsArray.length - 1) {
          return [`${hrTo12}:00 ${amOrPm()}`]
        }

        // return array of times on 15 min increments (flattened later)
        return [
          `${hrTo12}:00 ${amOrPm()}`, 
          `${hrTo12}:15 ${amOrPm()}`, 
          `${hrTo12}:30 ${amOrPm()}`, 
          `${hrTo12}:45 ${amOrPm()}`
        ]
      }).flat()
    }

    return hrsToTimes().map((time, i) => {
      return(
      <option key={i} value={time}>{time}</option>
      )
    })
  }

  return(
    <select className="time-select" name="startTime" placeholder="9:30 AM">
      { renderOptions() }
    </select>
  )
}

export default TimeSelector