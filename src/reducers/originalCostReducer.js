import {ADD_ORIGINAL_COST} from '../actions/originalCostsActions';

const defaultState = {
   costs: []
};

export default function originalCostReducer(state = defaultState, action) {
   switch (action.type) {
      case ADD_ORIGINAL_COST:
         const {costs} = state;
         costs.unshift(action.payload);
         return {
            ...state,
            costs
         };
      default:
         return state;
   }
}
