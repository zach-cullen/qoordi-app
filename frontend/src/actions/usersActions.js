import { API_URL } from '../store/constants'

const requestFromApi = (url = '') => {
  let payload = {
    headers: {"Content-Type": "application/json", "Accept": "application/json"},
    credentials: "include",
    method: "GET",
  }

  return fetch(`${API_URL}${url}`, payload)
}

export const fetchUser = (user = {id: 0}) => {
  return (dispatch) => requestFromApi(`/users/${user.id}`)
    .then(res => res.json())
    .then(json => {
      console.log("fetchUser response", json)

      // add only the user requested in fetch response to redux store
      dispatch({
        type: 'ADD_USER',
        payload: {
          user: json.user
        }
      })

      //dispatch an action for adding each project returned with user
      json.projects.forEach((project) => {
        dispatch({
          type: 'ADD_PROJECT',
          payload: {
            project: project
          }
        })
      })

      //dispatch an action for adding each category returned with user
      json.categories.forEach((category) => {
        dispatch({
          type: 'ADD_CATEGORY',
          payload: {
            category: category
          }
        })
      })

    })
}