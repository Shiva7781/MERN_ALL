import { combineReducers, legacy_createStore } from "redux";
import { reducer as AppReducer } from "./AppReducer/reducer";
import { reducer as AuthReducer } from "./AuthReducer/reducer";

const rootReducer = combineReducers({
  AppReducer,
  AuthReducer,
});

const store = legacy_createStore(rootReducer);

export { store };
