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

    case "PROXY_UPDATE_TIMEBLOCK_TIMES":
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

    case "DELETE_NEW_TIMEBLOCK":
      const filteredAllIds = state.allIds.filter((id) => id !== 0)
      const newById = filteredAllIds.reduce((newObj, id) => {
        return {
          ...newObj,
          [id]: state.byId[id]
        }
      }, {})
      
      return {
        ...state,
        byId: newById,
        allIds: filteredAllIds,
      }

    default:
      return state
  }

}

export default timeblocksReducer