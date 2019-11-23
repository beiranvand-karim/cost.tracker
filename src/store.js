import { combineReducers } from "redux";
import { createStore } from "redux";
import { costItemsReducer, sourceCostItemsReducer } from "./reducers";

const reducer = combineReducers({
  costItems: costItemsReducer,
  sourceCostItems: sourceCostItemsReducer
});
export const store = createStore(reducer);
