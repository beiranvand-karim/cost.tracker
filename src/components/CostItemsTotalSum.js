import React from "react";

export function CostItemsTotalSum({ costItems }) {
  const sum = costItems
    .map(costItem => costItem.cost)
    .reduce((total, cost) => total + Number(cost), 0);

  return <div className="TotalSum">total sum of transactions: {sum}</div>;
}
