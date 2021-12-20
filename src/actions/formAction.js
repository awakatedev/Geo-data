import { SEND_FORM_VALUE } from "./actionTypes";

export const sendValue = (payload) => {
  return {
    type: SEND_FORM_VALUE,
    payload,
  };
};
