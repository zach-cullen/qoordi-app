import { combineReducers } from 'redux'
import usersReducer from './usersReducer'
import projectsReducer from './projectsReducer'
import categoriesReducer from './categoriesReducer'
import timelinesReducer from './timelinesReducer'
import timeblocksReducer from './timeblocksReducer'

const entitiesReducer = combineReducers({
  users: usersReducer,
  projects: projectsReducer,
  categories: categoriesReducer,
  timelines: timelinesReducer,
  timeblocks: timeblocksReducer,
})

export default entitiesReducer