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

  const addAmOrPm = (timeString) => {
    const hr = parseInt(timeString.slice(0, 2))
    console.log("hr: ", hr)

    if (hr < 12) {
      console.log("< 12 ", `${timeString} AM`)
      return `${timeString} AM`
    }
    if (hr === 24) {
      console.log("24")
      return `${timeString} AM`
    }
    if (hr === 12) {
      console.log("12", `${timeString} PM`)
      return `${timeString} PM`
    }
    if (hr > 12 && hr < 24) {
      console.log("13 - 23", `${hr - 12}:${timeString.slice(3, 5)} PM`)
      return `${hr - 12}:${timeString.slice(3, 5)} PM`
    }
  }

  const setPlaceHolder = () => {
    const removeZeroPad = (timeString) => {
      if (timeString[0] === "0") {
        return timeString.slice(1, 5)
      }
      return timeString
    }

    if (props.name === "startTime") {
      console.log("set start")
      return addAmOrPm(removeZeroPad(props.startTime))
    }

    if (props.name === "endTime") {
      console.log("set end")
      return addAmOrPm(removeZeroPad(props.endTime))
    }
  }


  const handleChange = (event) => {
    props.handleChange(event)
  }

  return(
    <select onChange={handleChange} className="time-select" name={props.name} value={setPlaceHolder()}>
      { renderOptions() }
    </select>
  )
}

export default TimeSelector