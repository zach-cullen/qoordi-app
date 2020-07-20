import React from 'react'

const NewProjectButton = (props) => {

  // callback function from DashboardContainer with string argument that will result in display of new project form at top level of dashboard view
  const handleClick = () => {
    props.setActivePopup("new-project")
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