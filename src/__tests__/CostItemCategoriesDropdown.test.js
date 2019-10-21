/* global expect, describe, it, beforeEach */
import { CostItemCategoriesDropdown } from "../components/CostItemCategoriesDropdown";
import { costCategories } from "../config/costCategories";
import costItems from "../__helpers__/costItems";
import mockStore from "../__helpers__/mockStore";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { shallow } from "enzyme";
import React from "react";

describe("<CostItemCategoriesDropdown/>", () => {
  let store;
  const addFilteredCostItemActionMock = jest.fn();

  beforeEach(() => {
    store = mockStore;
  });

  it("should render without crashing", () => {
    shallow(<CostItemCategoriesDropdown />);
  });

  /**
   * this unit should be improved to cover the whole  if-else scenario
   */
  it("should push filtered cost items", () => {
    const wrapper = shallow(
      <CostItemCategoriesDropdown
        sourceCostItems={costItems}
        addFilteredCostItemsAction={addFilteredCostItemActionMock}
      />
    );

    wrapper.find("select").simulate("change", {
      target: { value: Object.keys(costCategories)[0] }
    });
    expect(addFilteredCostItemActionMock).toHaveBeenCalled();
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
