// specific time block dispatch for new timeblock with id of 0, used only as proxy until saved
export const addNewTimeBlock = (timeline_id, startTime, endTime) => {
  return {
    type: "ADD_TIMEBLOCK",
    payload: {
      timeblock: {
        id: 0,
        timeline_id: timeline_id,
        title: "",
        description: "",
        color: "blue",
        start_time: startTime,
        end_time: endTime,
      }
    }
  }
}

// specific to new timeblock because this action does not save change to database
export const proxyUpdateTimeBlockTimes = (id, startTime, endTime) => {
  return {
    type: "PROXY_UPDATE_TIMEBLOCK_TIMES",
    payload: {
      timeblock: {
        id: id,
        start_time: startTime,
        end_time: endTime,
      }
    }
  }
}

// action requires no payload because reducer will specifically target index of 0, which can only be for new timeblock
export const deleteNewTimeBlock = () => {
  return {
    type: "DELETE_NEW_TIMEBLOCK",
  }
}

// changes the color of new timeblock without persisting the change
export const updateNewTimeBlockColor = (color) => {
  return {
    type: "UPDATE_NEW_TIMEBLOCK_COLOR",
    payload: {
      color: color,
    }
  }
}