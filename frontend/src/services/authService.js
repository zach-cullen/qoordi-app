/* 
authService is responsible for fetching authentication data from the api and 
calling functions from the sessionService library to affect the sessionReducer via side-effect
*/

export const logInUser = (credentials = {email: '', password: ''}) => {

  console.log("authService: ", credentials)

}