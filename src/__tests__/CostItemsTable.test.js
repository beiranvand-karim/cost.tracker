/* global expect, describe, it, beforeEach */
import CostItemsTable from "../components/CostItemsTable";
import costItems from "../__helpers__/costItems";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import React from "react";

describe("<CostItemsTable />", () => {
  it("should render without crashing", () => {
    shallow(<CostItemsTable costItems={costItems} />);
  });

  it("should matches the snapshot", () => {
    const tree = renderer
      .create(<CostItemsTable costItems={costItems} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
