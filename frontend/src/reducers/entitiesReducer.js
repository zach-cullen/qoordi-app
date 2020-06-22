import { combineReducers } from 'redux'
import usersReducer from './usersReducer'
import projectsReducer from './projectsReducer'

const entitiesReducer = combineReducers({
  users: usersReducer,
  projects: projectsReducer,
})

export default entitiesReducer