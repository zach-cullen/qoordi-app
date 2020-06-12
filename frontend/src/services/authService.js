import { sessionService } from 'redux-react-session'

/* 
authService is responsible for fetching authentication data from the api and 
calling functions from the sessionService library to affect the sessionReducer via side-effect
*/

import { API_URL } from '../store/constants'

const headers = {
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  }
}

export const logInUser = (user) => {
  let payload = {
    ...headers,
    credentials: "include",
    method: "POST",
    body: JSON.stringify({ user })
  }

  return fetch(`${API_URL}/login`, payload)
    .then(res => res.json())
    .then(json => {
      let login = () => {
        // sets redux session state authenticated to true
        sessionService.saveSession()
        // populates user object in redux session state
        sessionService.saveUser(json.user)
      }
      
      let error = () => {
        // sets redux session state authenticated to false
        sessionService.deleteSession()
        // removes data from user object in session state
        sessionService.deleteUser()
        console.log(json.errors)
      }
      
      json.authenticated ? login() : error()
    })
}