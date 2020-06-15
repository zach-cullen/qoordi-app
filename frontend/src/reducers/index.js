import { combineReducers } from 'redux'
import { sessionReducer } from 'redux-react-session'
import entitiesReducer from './entitiesReducer'


const rootReducer = combineReducers({
  session: sessionReducer,
  entities: entitiesReducer,
})

export default rootReducer