
const projectsReducer = (state = { 
  byId: {},
  allIds: []
}, action) => {

  switch(action.type) {
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
  