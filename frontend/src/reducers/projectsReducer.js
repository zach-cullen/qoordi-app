
const projectsReducer = (state = { 
  loadStatus: "complete", // valid options: "complete", "failed", or "loading"
  byId: {},
  allIds: [],
}, action) => {

  switch(action.type) {

    case "LOADING_PROJECT":
      return {
        ...state,
        loadStatus: "loading",
      }

    case "FAILED_PROJECT_LOAD":
      return {
        ...state,
        loadStatus: "failed",
      }

    case "LOAD_PROJECT_COMPLETE":
      return {
        ...state,
        loadStatus: "complete",
      }

    case "ADD_PROJECT":
      const projectData = action.payload.project

      return {
        ...state,
        byId: {
          ...state.byId,
          [projectData.id]: projectData
        },
        allIds: state.allIds.includes(projectData.id) ? state.allIds : state.allIds.concat(projectData.id)
      }

    default:
      return state
  }

}

export default projectsReducer
  