
const projectsReducer = (state = { 
  loading: false,
  byId: {},
  allIds: [],
}, action) => {

  switch(action.type) {

    case "LOADING_PROJECT":
      return {
        ...state,
        loading: true
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
  