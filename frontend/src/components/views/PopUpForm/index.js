import React from 'react'
import NewCategoryForm from './NewCategoryForm'

const PopUpForm = (props) => {

  // resets activePopup when click outside of form and makes popup disappear
  const handleLightBoxClick = () => {
    props.setActivePopup("")
  }

  // displays the correct form using props
  const renderFormFromProps = () => {
    switch(props.activePopup) {
      case "new-project":
        return(<p>New Project</p>)

      case "new-category":
        return(
          <NewCategoryForm setActivePopup={props.setActivePopup}/>
        )

      default:
        console.log("invalid form key")
    }
  }

  return(
    <div className="popup-container">
      <div 
        className="popup-form-lightbox"
        onClick={handleLightBoxClick}
      >
      </div>
      {renderFormFromProps()}
    </div>
  )
}

export default PopUpForm