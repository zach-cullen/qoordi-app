import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../../actions/projectsActions'
import CategorySelector from './CategorySelector/CategorySelector'


class NewProjectForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      date: this.todayDateString(),
      category: this.mapCategories()[0],
      showCategoryOptions: false,
    }
  }


  // dispatches action using form data stored in this state
  handleSubmit = (event) => {
    event.preventDefault()
    if (this.formDataIsValid) {
      const project = {
        title: this.state.title,
        date: this.state.date,
        category_id: this.state.category.id,
      }
      this.props.createProject(project)
    }
    
  }

  // sets state attributes using event target attributes when called
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  // returns today's date in ISO string format 
  todayDateString = () => {
    const date = new Date()
    const todayFormatted = `${date.getFullYear()}-${date.getMonth() < 9 ? "0" + (date.getMonth()+1) : (date.getMonth()+1)}-${date.getDate()}`
    return todayFormatted
  }

  // hides ColorSelector options only if click target is not the selected category option div (which opens category options)
  closeCategoryOptions = (event) => {
    if (!event.target.classList.contains("selected-category-option")) {
      this.setState({ showCategoryOptions: false})
    }
  }

  // alters state passed as prop to ColorSelector so that it reveals color options
  openCategoryOptions = () => {
    this.setState({ 
      ...this.state,
      showCategoryOptions: true,
    })
  }

  // creates an array of categories from props categories object
  mapCategories = () => {
    return this.props.categories.allIds.map((id) => {
      return this.props.categories.byId[id]
    })
  }

  // receives a id and sets state category to the category with that id
  setCategory = (id) => {
    const category = this.props.categories.byId[id]
    this.setState({
      ...this.state,
      category: category,
    })
  }

  // returns boolean whether user has filled in title and date. Used for rendering button and preventing submit of incomplete form
  formDataIsValid = () => {
    return !!this.state.title && !!this.state.date
  }

  // renders button with enabled / disabled css class dependent on checkForTitleAndDate function
  renderButtonMode = () => {
    return(
      <button className={`form-btn ${this.formDataIsValid() ? "form-btn-enabled" : "form-btn-disabled"}`} type="submit">Save</button>
    )
  }


  render() {
    return(
      <div 
        className="large-form popup-form"
        onClick={this.closeCategoryOptions}
      >
        <div className="large-form-header">New Project</div>
        <form id="new-project-form" onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input 
              type="text" name="title"
              onChange={this.handleChange} 
              value={this.state.title} 
            />
          </label>
          <br/>
          <label>
            Date:
            <input 
              type="date" name="date" className="date-picker"
              min={this.todayDateString()}
              max="2099-12-31"
              onChange={this.handleChange}
              value={this.state.date}>
            </input>
          </label>
          <br/>

          <label>
            Category:
            <CategorySelector 
              selectedCategory={this.state.category}
              categories={this.mapCategories()}
              showCategoryOptions={this.state.showCategoryOptions}
              openCategoryOptions={this.openCategoryOptions}
              setCategory={this.setCategory}
            />
          </label>
          <br />

          { this.renderButtonMode() }
        </form>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    categories: state.entities.categories
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => {
      dispatch(createProject(project))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewProjectForm)