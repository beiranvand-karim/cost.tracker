/* global expect, describe, it, beforeEach */
import costItemsReducer from "../reducers/costItemsReducer";
import { DUMMY_ACTION } from "../constants/constants";
import costItems from "../__helpers__/costItems";
import {
  ADD_COST_ITEM,
  ADD_FILTERED_COST_ITEMS
} from "../actions/costItemsActions";

describe("costItemsReducer", () => {
  it("should matches the initial state", () => {
    const action = { type: DUMMY_ACTION };
    expect(costItemsReducer(undefined, action)).toMatchSnapshot();
  });

  it("should matches the add filtered cost items state", () => {
    const action = {
      type: ADD_FILTERED_COST_ITEMS,
      payload: costItems
    };
    expect(costItemsReducer(undefined, action)).toMatchSnapshot();
  });

  it("should matches the add cost item state", () => {
    const action = {
      type: ADD_COST_ITEM,
      payload: costItems[0]
    };
    expect(costItemsReducer(undefined, action)).toMatchSnapshot();
  });
});
