/* global expect, describe, it, beforeEach */
import { addCostItemAction } from "../actions/costItemsActions";
import costItems from "../__helpers__/costItems";
import configureStore from "redux-mock-store";

describe("costItemsActions", () => {
  const mockStore = configureStore();
  const store = mockStore();

  beforeEach(() => {
    store.clearActions();
  });

  it("should match the add cost actions snapshot", () => {
    store.dispatch(addCostItemAction(costItems[0]));
    expect(store.getActions()).toMatchSnapshot();
  });

  it("should match add filtered actions snapshot", () => {
    store.dispatch(addCostItemAction(costItems));
    expect(store.getActions()).toMatchSnapshot();
  });
});
