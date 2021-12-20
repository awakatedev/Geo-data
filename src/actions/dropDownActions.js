import { SET_DROPDOWN_VALUES } from "./actionTypes";

export const setCurrentSelectedValues = (payload) => {
  return {
    type: SET_DROPDOWN_VALUES,
    payload,
  };
};
