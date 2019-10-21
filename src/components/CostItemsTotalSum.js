import React from "react";

function CostItemsTotalSum({ costItems }) {
  const sum = costItems
    .map(costItem => costItem.cost)
    .reduce((total, cost) => total + Number(cost), 0);

  return <div>total sum of transactions: {sum}</div>;
}

export default CostItemsTotalSum;
