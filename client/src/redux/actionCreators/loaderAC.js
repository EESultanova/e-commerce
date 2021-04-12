import { HIDE_LOADER, SHOW_LOADER } from "../types/loaderTypes";

export const showLoader = (action) => {
  return {
    type: SHOW_LOADER,
    payload: action
  }
};

export const hideLoader = (action) => {
  return {
    type: HIDE_LOADER,
    payload: action
  }
};
