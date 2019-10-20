/* global expect, describe, it, beforeEach */
import React from "react";
import App from "../components/App";
import {Provider} from "react-redux";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {shallow} from "enzyme";
import costs from "../__helpers__/costs";

describe('App', () => {

   const mockStore = configureStore();
   let store;

   beforeEach(() => {
      store = mockStore({
         costs: {
            costs
         },
         originalCosts: {
            costs
         }
      });
   });

   it('should render without crashing', () => {
      shallow(<Provider store={store}>
         <App/>
      </Provider>)
   });

   it('should matches the snapshot', () => {
      const tree = renderer.create(<Provider store={store}>
         <App/>
      </Provider>).toJSON();
      expect(tree).toMatchSnapshot()
   });

});
