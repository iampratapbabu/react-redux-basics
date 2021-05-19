import changeTheNumber from "./upDown";
//import all reducers if you have

import {combineReducers} from "redux";

const rootReducer = combineReducers({
  changeTheNumber
  //if more reducers you have simply add them here
});

export default rootReducer;
