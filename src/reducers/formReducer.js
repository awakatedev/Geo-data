import { SEND_FORM_VALUE } from "../actions/actionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case SEND_FORM_VALUE:
      return {
        ...state,
        sendValue: action.payload,
      };
    default:
      return state;
  }
};
