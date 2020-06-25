import React from 'react'

const Timeblock = (props) => {

  const style = {
    backgroundColor: `var(--option-${props.timeBlock.color})`,
  }

  return(
    <div className="time-block" style={style}>
    </div>
  )
}

export default Timeblock