// import { API_ADDRESS } from '../store/constants'

export const logInUser = (credentials = {email: '', password: ''}) => {
  return {
    type: 'LOGIN_USER',
    payload: credentials
  }
}