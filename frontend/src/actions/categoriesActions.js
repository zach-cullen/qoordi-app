import { API_URL } from '../store/constants'

// configures post request payload and returns promise from fetch request to url
// assigns passed in params to new object with key of user
const postToApi = (params = {}, url = '') => {
  let payload = {
    headers: {"Content-Type": "application/json", "Accept": "application/json"},
    credentials: "include",
    method: "POST",
    body: JSON.stringify({ category: params })
  }

  return fetch(`${API_URL}${url}`, payload)
}


export const createCategory = (categoryData) => {

  return (dispatch) => postToApi(categoryData, "/categories")
    .then(res => res.json())
    .then(json => {
      if (json.category_created) {
        console.log("json response is:", json)
        dispatch({
          type: 'ADD_CATEGORY', 
          payload: {
            category: json.category, 
          }
        })
      }
    })
}