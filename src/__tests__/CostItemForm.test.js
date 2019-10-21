/* global expect, describe, it, beforeEach */
import { costCategories } from "../config/costCategories";
import { CostItemForm } from "../components/CostItemForm";
import costItems from "../__helpers__/costItems";
import renderer from "react-test-renderer";
import { shallow, mount } from "enzyme";
import React from "react";

describe("<CostItemForm/>", () => {
  const cost = costItems[0].cost;
  const comment = costItems[0].comment;
  const category = costItems[0].category;
  const addSourceCostItemActionMock = jest.fn();
  const addCostItemActionMock = jest.fn();
  const toggleMock = jest.fn();

  it("should render without crashing", () => {
    shallow(<CostItemForm />);
  });

  it("should add a cost item", () => {
    const costForm = shallow(
      <CostItemForm
        addCostItemAction={addCostItemActionMock}
        addSourceCostItemAction={addSourceCostItemActionMock}
        toggle={toggleMock}
      />
    );
    costForm
      .find("#cost")
      .simulate("change", { target: { value: cost, name: "cost" } });
    costForm
      .find("#comment")
      .simulate("change", { target: { value: comment, name: "comment" } });
    costForm
      .find("#category")
      .simulate("change", { target: { value: category, name: "category" } });
    costForm.find("Form").simulate("submit", { preventDefault() {} });
    expect(addSourceCostItemActionMock).toHaveBeenCalledWith(costItems[0]);
    expect(addCostItemActionMock).toHaveBeenCalledWith(costItems[0]);
    expect(toggleMock).toHaveBeenCalled();
  });

  it("should render cost categories in a select tag", () => {
    const wrapper = mount(<CostItemForm />);

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
        <CostItemForm cost={cost} comment={comment} category={category} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
