import costItemsReducer from "./costItemsReducer";
import sourceCostItemsReducer from "./sourceCostItemsReducer";
import { combineReducers } from "redux";

const reducer = combineReducers({
  costItems: costItemsReducer,
  sourceCostItems: sourceCostItemsReducer
});

export default reducer;
