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
      dispatch({
        type: 'ADD_USER',
        payload: {
          user: json
        }
      })
    })
}