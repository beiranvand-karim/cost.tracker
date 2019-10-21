/* global expect, describe, it, beforeEach */
import ModalContainer from "../components/ModalContainer";
import mockStore from "../__helpers__/mockStore";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { shallow } from "enzyme";
import React from "react";

describe("<ModalContainer/>", () => {
  let store;
  const toggleMock = jest.fn();

  beforeEach(() => {
    store = mockStore;
  });

  it("should render without crashing", () => {
    shallow(<ModalContainer />);
  });

  it("should matches the snapshot", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <ModalContainer toggle={toggleMock} />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
