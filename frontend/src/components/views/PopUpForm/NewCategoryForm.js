import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createCategory } from '../../../actions/categoriesActions'
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
    if (this.checkForTitle() === true) {
      const category = {
        title: this.state.title,
        color: this.state.color,
      }
      createCategory(category)
    }
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

  // returns boolean whether user has filled in title. Used for rendering button and preventing submit of incomplete form
  checkForTitle = () => {
    return !!this.state.title
  }

  // renders button with enabled / disabled css class dependent on checkForTitle function
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



export default connect()(NewCategoryForm)