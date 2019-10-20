/* global expect, describe, it, beforeEach */
import configureStore from "redux-mock-store";
import {addCostAction} from "../actions/filteredCostActions";
import costs from "../__helpers__/costs";

describe('CreateQuestionActions', () => {

   const mockStore = configureStore();
   const store = mockStore();

   beforeEach(() => {
      store.clearActions();
   });

   it('should match the add cost actions snapshot', () => {
      store.dispatch(addCostAction(costs[0]));
      expect(store.getActions()).toMatchSnapshot();
   });

   it('should match add filtered actions snapshot', () => {
      store.dispatch(addCostAction(costs));
      expect(store.getActions()).toMatchSnapshot();
   });
});
