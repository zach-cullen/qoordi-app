import { combineReducers } from 'redux'
import usersReducer from './usersReducer'
import projectsReducer from './projectsReducer'
import categoriesReducer from './categoriesReducer'
import timelinesReducer from './timelinesReducer'

const entitiesReducer = combineReducers({
  users: usersReducer,
  projects: projectsReducer,
  categories: categoriesReducer,
  timelines: timelinesReducer,
})

export default entitiesReducer