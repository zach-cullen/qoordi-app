import './ColorSelector.css'
import React from 'react'

const ColorSelector = (props) => {

  const colorOptions = ["blue", "green", "yellow", "orange", "pink", "purple"]

  const handleColorClick = (event) => {
    const color = event.target.getAttribute("data-value")
    props.setColor(color)
  }

  const renderOptions = () => {
    if (props.showColorOptions) {
      return(
        <div className="color-selector-options">
          { colorOptions.map((color) => {
            return(
              <div key={color} className="color-option" data-value={color} onClick={handleColorClick}>
                <span className={`color-option-spot option-bg-${color}`}></span>{color}<span></span>
              </div>
            )
          }) }
        </div>
      )
    }
  } 

  return(
    <div className="color-selector">

      <div className="selected-color-option" onClick={props.openColorOptions}>
        <span className={`color-option-spot option-bg-${props.selectedColor}`}></span>{props.selectedColor}<span></span>
      </div>

      { renderOptions() }
    </div>
  )
}

export default ColorSelector