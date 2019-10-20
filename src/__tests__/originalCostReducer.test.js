/* global expect, describe, it, beforeEach */
import { ADD_ORIGINAL_COST} from '../actions/originalCostsActions'
import filteredCostReducer from '../reducers/originalCostReducer'
import costs from "../__helpers__/costs";
import DUMMY_ACTION from "../constants/dummyAction";

describe('originalCostReducer', () => {

   it('should matches the initial state', () => {
      const action = { type: DUMMY_ACTION };
      expect(filteredCostReducer(undefined, action)).toMatchSnapshot()
   });

   it('should matches the add original cost state', () => {
      const action = {
         type: ADD_ORIGINAL_COST,
         payload: costs
      };
      expect(filteredCostReducer(undefined, action)).toMatchSnapshot()
   });

});
