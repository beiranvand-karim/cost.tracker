/* global expect, describe, it, beforeEach */
import { ADD_FILTERED_COSTS, ADD_COST} from '../actions/filteredCostActions'
import filteredCostReducer from '../reducers/filteredCostReducer'
import costs from "../__helpers__/costs";
import DUMMY_ACTION from "../constants/dummyAction";

describe('filteredCostReducer', () => {

   it('should matches the initial state', () => {
      const action = { type: DUMMY_ACTION };
      expect(filteredCostReducer(undefined, action)).toMatchSnapshot()
   });

   it('should matches the add filtered costs state', () => {
      const action = {
         type: ADD_FILTERED_COSTS,
         payload: costs
      };
      expect(filteredCostReducer(undefined, action)).toMatchSnapshot()
   });

   it('should matches the add cost state', () => {
      const action = {
         type: ADD_COST,
         payload: costs[0]
      };
      expect(filteredCostReducer(undefined, action)).toMatchSnapshot()
   });

});
