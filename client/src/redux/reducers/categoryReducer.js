const { GET_CATEGORIES, ADD_CATEGORY, SELECTED_CATEGORY } = require("../types/categoryTypes");

const categoryReducer = (state = [], action) => {
  switch (action.type) {
    case GET_CATEGORIES: 
      return action.payload


    case ADD_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, action.payload]
      }

    case SELECTED_CATEGORY:
      return {
        ...state,
        currentCategory: action.payload
      }

    default:
      return state;
  }
}

export default categoryReducer
