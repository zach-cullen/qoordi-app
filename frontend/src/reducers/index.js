import { combineReducers } from 'redux'
import { sessionReducer } from 'redux-react-session'
import entitiesReducer from './entitiesReducer'

const appReducer = combineReducers({
  session: sessionReducer,
  entities: entitiesReducer,
})

const rootReducer = (state, action) => {
  if (action.type === "RESET_STORE") {
    state = {}
    return appReducer(state, action)
  }

  return appReducer(state, action)
}

export default rootReducer