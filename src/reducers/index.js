import { combineReducers } from "redux";
import dropDownReducer from "./dropDownReducer";
import formReducer from "./formReducer";

export default combineReducers({
  dropDownReducer,
  formReducer,
});
