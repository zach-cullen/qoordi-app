import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { sessionService } from 'redux-react-session'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

const validateSession = () => {
  // called on refresh, can call an async fetch to server if desired or return default true to keep session alive until log out
  // returning false will destroy the session
  return true
}

const options = {
  refreshOnCheckAuth: false, // if true, refresh redux store in the checkAuth function
  redirectPath: '/', // path used when a session is rejected or doesn't exist
  driver: 'COOKIES', // removing this specification slows down load since library will try multiple drivers
  validateSession // return boolean value or promise, if returns false the session will be destroyed
}

sessionService.initSessionService(store, options)

export default store