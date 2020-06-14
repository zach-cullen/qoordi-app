/* 
authService is responsible for fetching authentication data from the api and 
calling functions from the sessionService library to affect the sessionReducer via side-effect
*/

import { sessionService } from 'redux-react-session'
import { API_URL } from '../store/constants'


const resetClientSideSession = () => {
  // remove user data from user session cookie, thus altering state.session
  sessionService.deleteUser()
  // resets client session cookie to authenticated false ,thus altering state.session 
  sessionService.deleteSession()
}

// configures post request payload and returns promise from fetch request to url
const postToApi = (params = {}, url = '') => {
  let payload = {
    headers: {"Content-Type": "application/json", "Accept": "application/json"},
    credentials: "include",
    method: "POST",
    body: JSON.stringify({ user: params })
  }

  return fetch(`${API_URL}${url}`, payload)
}

export const logInUser = (user) => {
  return postToApi(user, "/login")
    .then(res => res.json())
    .then(json => {
      let login = () => {
        // sets redux session state authenticated to true
        sessionService.saveSession()
        // populates user object in redux session state
        sessionService.saveUser(json.user)
      }
      
      let error = () => {
        resetClientSideSession()
        console.log(json.errors)
      }
      
      json.authenticated ? login() : error()
    })
}

export const logOutUser = (user) => {
  return postToApi(user, "/logout")
    .then(res => res.json())
    .then(json => {
      if (json.logged_out) {
        resetClientSideSession()
      } else {
        resetClientSideSession()
        console.log(json.errors)
      }
    })
}

export const signUpUser = (user) => {
  console.log("signing up: ", user)
}

