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
    .then(json => console.log("response: ", json))
}