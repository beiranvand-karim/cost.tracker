export const ADD_COST = 'ADD_COST';
export const ADD_FILTERED_COSTS = 'ADD_FILTERED_COSTS';

export const addCostAction = (data) => {
   return {
      type: ADD_COST,
      payload: data
   }
};

export const addFilteredActions = (data) => {
   return {
      type: ADD_FILTERED_COSTS,
      payload: data
   }
};
