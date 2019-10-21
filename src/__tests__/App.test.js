/* global expect, describe, it, beforeEach */
import mockStore from "../__helpers__/mockStore";
import costItems from "../__helpers__/costItems";
import renderer from "react-test-renderer";
import { App } from "../components/App";
import { Provider } from "react-redux";
import { shallow } from "enzyme";
import React from "react";

describe("<App />", () => {
  let store;

  beforeEach(() => {
    store = mockStore;
  });

  it("should render without crashing", () => {
    shallow(<App />);
  });

  it("should matches the snapshot", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <App costItems={costItems} />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
