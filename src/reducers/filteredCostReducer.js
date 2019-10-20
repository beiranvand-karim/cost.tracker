import {ADD_COST, ADD_FILTERED_COSTS} from '../actions/filteredCostActions';

const defaultState = {
  costs: []
};

export default function filteredCostReducer(state = defaultState, action) {
   switch (action.type) {
      case ADD_COST:
         const {costs} = state;
         costs.unshift(action.payload);
         return {
            ...state,
            costs
         };
      case ADD_FILTERED_COSTS:
         return {
            ...state,
            costs: action.payload
         };
      default:
         return state;
   }
}
