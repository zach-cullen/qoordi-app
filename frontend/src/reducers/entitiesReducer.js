import { combineReducers } from 'redux'
import usersReducer from './usersReducer'
import projectsReducer from './projectsReducer'
import categoriesReducer from './categoriesReducer'

const entitiesReducer = combineReducers({
  users: usersReducer,
  projects: projectsReducer,
  categories: categoriesReducer,
})

export default entitiesReducer