/* global expect, describe, it, beforeEach */
import CostItemsTotalSum from "../components/CostItemsTotalSum";
import costItems from "../__helpers__/costItems";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import React from "react";

describe("<CostItemsTotalSum/>", () => {
  it("should render without crashing", () => {
    shallow(<CostItemsTotalSum costItems={costItems} />);
  });

  it("should matches the snapshot", () => {
    const tree = renderer
      .create(<CostItemsTotalSum costItems={costItems} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
