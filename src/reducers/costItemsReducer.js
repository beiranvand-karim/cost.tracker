import {
  ADD_COST_ITEM,
  ADD_FILTERED_COST_ITEMS
} from "../actions/costItemsActions";

const defaultState = {
  costItems: []
};

export default function costItemsReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_COST_ITEM:
      const { costItems } = state;
      costItems.unshift(action.payload);
      return {
        ...state,
        costItems
      };
    case ADD_FILTERED_COST_ITEMS:
      return {
        ...state,
        costItems: action.payload
      };
    default:
      return state;
  }
}
