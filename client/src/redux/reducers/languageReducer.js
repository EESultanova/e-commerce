const { SET_LANGUAGE } = require("../types/languageTypes");

const languageReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return action.payload

    default:
      return state;
  }
}

export default languageReducer
