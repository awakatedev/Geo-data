import { SET_DROPDOWN_VALUES } from "../actions/actionTypes";

const INITIAL_STATE = {
  dropDownState: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_DROPDOWN_VALUES:
      return {
        ...state,
        dropDownState: action.payload,
      };
    default:
      return state;
  }
};
