/* global expect, describe, it, beforeEach */
import { ADD_SOURCE_COST_ITEM } from "../actions/sourceCostItemsActions";
import sourceCostItemsReducer from "../reducers/sourceCostItemsReducer";
import { DUMMY_ACTION } from "../constants/constants";
import costItems from "../__helpers__/costItems";

describe("sourceCostItemsReducer", () => {
  it("should matches the initial state", () => {
    const action = { type: DUMMY_ACTION };
    expect(sourceCostItemsReducer(undefined, action)).toMatchSnapshot();
  });

  it("should matches the add original cost state", () => {
    const action = {
      type: ADD_SOURCE_COST_ITEM,
      payload: costItems
    };
    expect(sourceCostItemsReducer(undefined, action)).toMatchSnapshot();
  });
});
