import { ADD_SOURCE_COST_ITEM } from "../actions/sourceCostItemsActions";

const defaultState = {
  costItems: []
};

export default function sourceCostItemsReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_SOURCE_COST_ITEM:
      const { costItems } = state;
      costItems.unshift(action.payload);
      return {
        ...state,
        costItems
      };
    default:
      return state;
  }
}
