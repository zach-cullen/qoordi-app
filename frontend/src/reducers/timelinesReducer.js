const timelinesReducer = (state = { 
  byId: {},
  allIds: []
}, action) => {

  switch(action.type) {
    case "ADD_TIMELINE":
      const timelineData = action.payload.timeline

      return {
        ...state,
        byId: {
          ...state.byId,
          [timelineData.id]: timelineData
        },
        allIds: state.allIds.includes(timelineData.id) ? state.allIds : state.allIds.concat(timelineData.id)
      }

    default:
      return state
  }

}

export default timelinesReducer