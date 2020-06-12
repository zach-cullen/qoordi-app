// import { API_ADDRESS } from '../store/constants'

export const logInUser = (credentials = {email: '', password: ''}) => {
  console.log(`log in with credentials: `, credentials)
  return {
    type: 'LOGIN_USER',
    payload: credentials
  }
}