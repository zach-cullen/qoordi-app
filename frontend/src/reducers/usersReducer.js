
const usersReducer = (state = { 
  byId: {},
  allIds: []
}, action) => {

  switch(action.type) {
    case "ADD_USER":
      const userData = action.payload.user

      console.log("action payload", userData)
      return {
        ...state,
        byId: {
          ...state.byId,
          [userData.id]: userData
        },
        allIds: state.allIds.includes(userData.id) ? state.allIds : state.allIds.concat(userData.id)
      }

    default:
      return state
  }

}

export default usersReducer
  