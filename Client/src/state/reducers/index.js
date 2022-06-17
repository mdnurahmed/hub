import { combineReducers } from "redux";
import menuReducer from "./menuReducer";
import getHubsReducer from "./getHubsReducer";

const reducers = combineReducers({
  menu: menuReducer,
  getHubs: getHubsReducer,
});

export default reducers;
