import React, { Component } from 'react'
import ColorSelector from './ColorSelector/ColorSelector'

class NewCategoryForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      color: "blue",
      showColorOptions: false,
    }
  }



  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log("submit form!")
  }

  setColor = (color) => {
    this.setState({
      ...this.state,
      color: color,
    })
  }

  // hides ColorSelector options only if click target is not a color-option div
  closeColorOptions = (event) => {
    if (!event.target.classList.contains("selected-color-option")) {
      this.setState({ showColorOptions: false})
    }
  }

  // alters state passed as prop to ColorSelector so that it reveals color options
  openColorOptions = () => {
    this.setState({ 
      ...this.state,
      showColorOptions: true,
    })
  }

  checkForTitle = () => {
    return !!this.state.title
  }

  renderButtonMode = () => {
    return(
      <button className={`form-btn ${this.checkForTitle() ? "form-btn-enabled" : "form-btn-disabled"}`} type="submit">Save</button>
    )
  }


  render() {
    return(
      <div 
        className="large-form popup-form"
        onClick={this.closeColorOptions}
      >
        <div className="large-form-header">New Category</div>
        <form id="new-category-form" onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input 
              type="text" name="title"
              onChange={this.handleChange} 
              value={this.state.title} 
            />
          </label>
          <br/>
          <label>
            Color:
            <ColorSelector 
              selectedColor={this.state.color}
              showColorOptions={this.state.showColorOptions}
              openColorOptions={this.openColorOptions}
              setColor={this.setColor}
            />
          </label>
          <br/>
          { this.renderButtonMode() }
        </form>
      </div>
    )
  }
}

export default NewCategoryForm