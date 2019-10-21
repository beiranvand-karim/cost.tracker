import configureStore from "redux-mock-store";
import costItems from "./costItems";

const mockStore = configureStore();

export default mockStore({
  costItems: {
    costItems: costItems
  },
  sourceCostItems: {
    costItems: costItems
  }
});
