import React from 'react'

const NewProjectButton = (props) => {

  const thisProps = props

  const handleClick = () => {
    thisProps.setActivePopup("new-project")
  }

  return(
    <button 
      className="med-btn brand-color-btn" 
      id="new-project-button"
      onClick={handleClick}
    >
      New Project
    </button>
  )
}

export default NewProjectButton