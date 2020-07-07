import { API_URL } from '../store/constants'

// configures post request payload and returns promise from fetch request to url
// assigns passed in params to new object with key of user
const postToApi = (params = {}, url = '') => {
  let payload = {
    headers: {"Content-Type": "application/json", "Accept": "application/json"},
    credentials: "include",
    method: "POST",
    body: JSON.stringify({ timeblock: params })
  }

  return fetch(`${API_URL}${url}`, payload)
}


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

export const addTimeBlock = (timeBlockData) => {
  return {
    type: 'ADD_TIMEBLOCK',
    payload: {
      timeblock: timeBlockData,
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

// specific to new timeblock because this action does not save change to database
export const proxyUpdateTimeBlockTitle = (id, title) => {
  return {
    type: "PROXY_UPDATE_TIMEBLOCK_TITLE",
    payload: {
      timeblock: {
        id: id,
        title: title,
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

// save new timeblock to the database, remove its proxy from redux store, and add persisted timeblock to redux store
export const createTimeBlock = (timeBlockData) => {
  return (dispatch) => postToApi(timeBlockData, "/timeblocks")
  .then(res => res.json())
  .then(json => {
    if (json.timeblock_created) {
      dispatch(deleteNewTimeBlock())
      dispatch(addTimeBlock(json.timeblock))
    }
  })
}