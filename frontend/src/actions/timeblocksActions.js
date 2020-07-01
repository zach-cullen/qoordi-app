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

export const deleteNewTimeBlock = () => {
  return {
    type: "DELETE_NEW_TIMEBLOCK",
  }
}

export const updateNewTimeBlockColor = (color) => {
  return {
    type: "UPDATE_NEW_TIMEBLOCK_COLOR",
    payload: {
      color: color,
    }
  }
}