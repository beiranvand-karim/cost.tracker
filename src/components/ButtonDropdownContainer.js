import React from 'react';
import {categories} from '../config/categories';
import {useDispatch, useSelector} from 'react-redux';
import {addFilteredActions} from '../actions/filteredCostActions';
import NO_FILTER from "../constants/noFilter";

export default function ButtonDropdownButtonContainer() {

   const dispatch = useDispatch();
   const originalCost = useSelector(state => state.originalCosts);
   const {costs} = originalCost;

   const select = (event) => {
      const {value} = event.target;
      if (NO_FILTER === value) {
         dispatch(addFilteredActions(costs));
         return;
      }
      const filtered = costs.filter(cost => cost.category === value);
      dispatch(addFilteredActions(filtered));
   };

   const keys = Object.keys(categories);
   keys.unshift(NO_FILTER);

   return (
      <div>
         <select onChange={select}>
            {
               keys.map((category, index) => {
                  return <option key={index} value={category}>{category}</option>
               })
            }
         </select>
      </div>
   )
}
