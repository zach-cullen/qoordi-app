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

    case "UPDATE_NEW_TIMEBLOCK_TIMES":
      const block = action.payload.timeblock
      return {
        ...state,
        byId: {
          ...state.byId,
          [block.id]: {
            ...state.byId[block.id],
            start_time: block.start_time,
            end_time: block.end_time,
          }
        }
      }


    default:
      return state
  }

}

export default timeblocksReducer