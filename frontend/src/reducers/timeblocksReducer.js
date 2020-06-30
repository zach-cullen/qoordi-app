const timeblocksReducer = (state = { 
  byId: {},
  allIds: []
}, action) => {

  switch(action.type) {
    case "ADD_TIMEBLOCK":
      const timeblockData = action.payload.timeblock

      return {
        ...state,
        byId: {
          ...state.byId,
          [timeblockData.id]: timeblockData
        },
        allIds: state.allIds.includes(timeblockData.id) ? state.allIds : state.allIds.concat(timeblockData.id)
      }

    default:
      return state
  }

}

export default timeblocksReducer