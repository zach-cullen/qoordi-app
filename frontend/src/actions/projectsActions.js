import { API_URL } from '../store/constants'

// configures post request payload and returns promise from fetch request to url
// assigns passed in params to new object with key of user
const postToApi = (params = {}, url = '') => {
  let payload = {
    headers: {"Content-Type": "application/json", "Accept": "application/json"},
    credentials: "include",
    method: "POST",
    body: JSON.stringify({ project: params })
  }

  return fetch(`${API_URL}${url}`, payload)
}


export const createProject = (projectData) => {
  return (dispatch) => postToApi(projectData, "/projects")
    .then(res => res.json())
    .then(json => {
      if (json.project_created) {
        dispatch({
          type: 'ADD_PROJECT', 
          payload: {
            project: json.project, 
          }
        })
      }
    })
}