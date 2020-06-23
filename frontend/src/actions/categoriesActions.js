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

  console.log("createCategory!", categoryData)

  return postToApi(categoryData, "/categories")
    .then(res => res.json())
    .then(json => console.log(json))
}