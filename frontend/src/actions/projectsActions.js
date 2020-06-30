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

const requestFromApi = (url = '') => {
  let payload = {
    headers: {"Content-Type": "application/json", "Accept": "application/json"},
    credentials: "include",
    method: "GET",
  }

  return fetch(`${API_URL}${url}`, payload)
}

export const fetchProject = (project = {id: 0}) => {
  return (dispatch) => {

    dispatch({ type: 'LOADING_PROJECT' })
  
    requestFromApi(`/projects/${project.id}`)
    .then(res => res.json())
    .then(json => {
      if (json.request_successful) {

        console.log("fetch project: ", json)

        dispatch({
          type: 'ADD_PROJECT',
          payload: {
            project: json.project
          }
        })

        json.timelines.forEach((timeline) => {
          dispatch({
            type: 'ADD_TIMELINE',
            payload: {
              timeline: timeline,
            }
          })
        })

        json.timeblocks.forEach((timeblock) => {
          dispatch({
            type: 'ADD_TIMEBLOCK',
            payload: {
              timeblock: timeblock,
            }
          })
        })

        dispatch({ type: 'LOAD_PROJECT_COMPLETE'})

      } else {
        dispatch({ type: 'FAILED_PROJECT_LOAD' })
      }

    })
  }
}