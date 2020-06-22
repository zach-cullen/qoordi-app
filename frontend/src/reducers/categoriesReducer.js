
const categoriesReducer = (state = { 
  byId: {},
  allIds: []
}, action) => {

  switch(action.type) {
    case "ADD_CATEGORY":
      const categoryData = action.payload.category

      return {
        ...state,
        byId: {
          ...state.byId,
          [categoryData.id]: categoryData
        },
        allIds: state.allIds.includes(categoryData.id) ? state.allIds : state.allIds.concat(categoryData.id)
      }

    default:
      return state
  }

}

export default categoriesReducer