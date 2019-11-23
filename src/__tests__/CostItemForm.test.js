/* global expect, describe, it, beforeEach */
import { costCategories } from "../config";
import { CostItemForm } from "../components/CostItemForm";
import mockStore from "../__helpers__/mockStore";
import costItems from "../__helpers__/costItems";
import renderer from "react-test-renderer";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import React from "react";

describe("<CostItemForm/>", () => {
  const cost = costItems[0].cost;
  const comment = costItems[0].comment;
  const category = costItems[0].category;
  const toggleMock = jest.fn();
  const store = mockStore;

  beforeEach(() => {
    store.clearActions();
  });

  it("should render without crashing", () => {
    shallow(
      <Provider store={store}>
        <CostItemForm />
      </Provider>
    );
  });

  it("should add a cost item", () => {
    const costForm = mount(
      <Provider store={store}>
        <CostItemForm toggle={toggleMock} />
      </Provider>
    );
    costForm
      .find("#cost")
      .at(1)
      .simulate("change", { target: { value: cost, name: "cost" } });
    costForm
      .find("#comment")
      .at(1)
      .simulate("change", { target: { value: comment, name: "comment" } });
    costForm
      .find("#category")
      .at(1)
      .simulate("change", { target: { value: category, name: "category" } });
    costForm.find("Form").simulate("submit", { preventDefault() {} });
    expect(store.getActions()).toMatchSnapshot();
    expect(toggleMock).toHaveBeenCalled();
  });

  it("should render cost categories in a select tag", () => {
    const wrapper = mount(
      <Provider store={store}>
        <CostItemForm cost={cost} comment={comment} category={category} />
      </Provider>
    );

    for (let i = 0; i < Object.keys(costCategories).length; i++) {
      expect(
        wrapper
          .find("option")
          .at(i)
          .text()
      ).toBe(Object.keys(costCategories)[i]);
    }
  });

  it("should matches the snapshot", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <CostItemForm cost={cost} comment={comment} category={category} />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
