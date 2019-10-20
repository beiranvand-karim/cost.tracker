import {useSelector} from 'react-redux';
import React from 'react'

export default function SumOfTransactions() {

   const {costs} = useSelector(state => state.costs);

   const sum = costs.map(({cost}) => cost).reduce((total, cost) => total + Number(cost), 0);

   return (
      <div>
         {sum}
      </div>
   )
}
