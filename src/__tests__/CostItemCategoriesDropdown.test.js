/* global expect, describe, it, beforeEach */
import { CostItemCategoriesDropdown } from "../components";
import { costCategories } from "../config";
import mockStore from "../__helpers__/mockStore";
import renderer from "react-test-renderer";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import React from "react";

describe("<CostItemCategoriesDropdown/>", () => {
  let store;

  beforeEach(() => {
    store = mockStore;
    store.clearActions();
  });

  it("should render without crashing", () => {
    shallow(
      <Provider store={store}>
        <CostItemCategoriesDropdown />
      </Provider>
    );
  });

  /**
   * this unit should be improved to cover the whole  if-else scenario
   */
  it("should push filtered cost items", () => {
    const wrapper = mount(
      <Provider store={store}>
        <CostItemCategoriesDropdown />
      </Provider>
    );

    wrapper.find("select").simulate("change", {
      target: { value: Object.keys(costCategories)[0] }
    });
    expect(store.getActions()).toMatchSnapshot();
  });

  it("should matches the snapshot", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <CostItemCategoriesDropdown />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
