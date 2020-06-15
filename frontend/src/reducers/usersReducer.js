
const usersReducer = (state = { 
  byId: {},
  allIds: []
}, action) => {

  switch(action.type) {

    case "ADD_USER":

      console.log(action.payload)

      return state

    default:
      return state
  }

}

export default usersReducer
  