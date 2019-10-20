import {combineReducers} from 'redux';
import filteredCostReducer from './filteredCostReducer';
import originalCostReducer from './originalCostReducer';

const reducer = combineReducers({
   costs: filteredCostReducer,
   originalCosts: originalCostReducer
});

export default reducer;
