export const ADD_FILTERED_COST_ITEMS = "ADD_FILTERED_COST_ITEMS";
export const ADD_COST_ITEM = "ADD_COST_ITEM";


export const addFilteredCostItemsAction = data => ({
  type: ADD_FILTERED_COST_ITEMS,
  payload: data
});

export const addCostItemAction = data => ({
  type: ADD_COST_ITEM,
  payload: data
});
