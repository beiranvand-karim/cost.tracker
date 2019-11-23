import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { NO_FILTER } from "../constants/constants";
import { addFilteredCostItemsAction } from "../actions";
import { costCategories } from "../config";

const costCategoriesKeys = () => {
  const temp = Object.keys(costCategories);
  temp.unshift(NO_FILTER);
  return temp;
};

export function CostItemCategoriesDropdown() {
  const dispatch = useDispatch();
  const sourceCostItems = useSelector(state => state.sourceCostItems.costItems);
  const handleChange = event => {
    const { value } = event.target;
    if (NO_FILTER === value) {
      dispatch(addFilteredCostItemsAction(sourceCostItems));
      return;
    }
    const CostItems = sourceCostItems.filter(
      costItem => costItem.category === value
    );
    dispatch(addFilteredCostItemsAction(CostItems));
  };

  return (
    <div>
      <select onChange={handleChange}>
        {costCategoriesKeys().map((costCategory, index) => {
          return (
            <option key={index} value={costCategory}>
              {costCategory}
            </option>
          );
        })}
      </select>
    </div>
  );
}
