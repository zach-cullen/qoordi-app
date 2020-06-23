import React, { Component } from 'react'

const PopUpForm = (props) => {

  const thisProps = props

  // resets activePopup when click outside of form and makes popup disappear
  const handleLightBoxClick = () => {
    thisProps.setActivePopup("")
  }

  // displays the correct form using props
  const renderFormFromProps = () => {
    switch(thisProps.activePopup) {
      case "new-project":
        return(<p>New Project</p>)

      case "new-category":
        return(<p>New Category</p>)
    }
  }

  return(
    <div className="popup-container">
      <div 
        className="popup-form-lightbox"
        onClick={handleLightBoxClick}
      >
      </div>
      <div className="large-form popup-form">
        {renderFormFromProps()}
      </div>
    </div>
  )
}

export default PopUpForm