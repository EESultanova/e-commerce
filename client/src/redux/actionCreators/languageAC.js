import { SET_LANGUAGE } from "../types/languageTypes"

export const setLanguage = (language) => {
  return {
    type: SET_LANGUAGE,
    payload: language,
  }
}
