// specific time block dispatch for new timeblock with id of 0, used only as proxy until saved
export const addNewTimeBlock = (startTime, endTime) => {
  return {
    type: "ADD_TIMEBLOCK",
    payload: {
      timeblock: {
        id: 0,
        title: "",
        description: "",
        color: "blue",
        start_time: startTime,
        end_time: endTime,
      }
    }
  }
}