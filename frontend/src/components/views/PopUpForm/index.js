import React, { Component } from 'react'

class PopUpForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      activePopup: props.activePopup,
    }
  }

  // resets activePopup when click outside of form and makes popup disappear
  handleLightBoxClick = () => {
    this.props.setActivePopup("")
  }

  renderFormFromProps = () => {
    switch(this.state.activePopup) {
      case "new-project":
        return(<p>New Project</p>)

      case "new-category":
        return(<p>New Category</p>)
    }
  }

  render() {
    return(
      <div className="popup-container">
        <div 
          className="popup-form-lightbox"
          onClick={this.handleLightBoxClick}
        >
        </div>
        <div className="large-form popup-form">
          {this.renderFormFromProps()}
        </div>
      </div>
    )
  }
}

export default PopUpForm