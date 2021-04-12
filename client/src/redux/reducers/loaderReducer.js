const { SHOW_LOADER, HIDE_LOADER } = require("../types/loaderTypes");

const loaderReducer = (state = '', action) => {
  switch (action.type) {
    case SHOW_LOADER: 
      return true

    case HIDE_LOADER:
      return false

    default:
      return state;
  }
}

export default loaderReducer
