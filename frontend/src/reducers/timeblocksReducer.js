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

    case "UPDATE_TIMEBLOCK": 
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.timeblock.id]: action.payload.timeblock,
        }
      }

    case "PROXY_UPDATE_TIMEBLOCK_TIMES":
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.timeblock.id]: {
            ...state.byId[action.payload.timeblock.id],
            start_time: action.payload.timeblock.start_time,
            end_time: action.payload.timeblock.end_time,
          }
        }
      }

    case "PROXY_UPDATE_TIMEBLOCK_TITLE":
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.timeblock.id]: {
            ...state.byId[action.payload.timeblock.id],
            title: action.payload.timeblock.title,
          }
        }
      }

    case "UPDATE_NEW_TIMEBLOCK_COLOR":
      return {
        ...state,
        byId: {
          ...state.byId,
          0: {
            ...state.byId[0],
            color: action.payload.color
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