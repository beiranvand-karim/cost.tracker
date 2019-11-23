import { Table } from "reactstrap";
import React from "react";

export function CostItemsTable({ costItems }) {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Cost</th>
          <th>Category</th>
          <th>Comment</th>
        </tr>
      </thead>
      <tbody>
        {costItems.map((costItem, index) => (
          <tr key={index}>
            <th scope="row">{index}</th>
            <td>{costItem.cost}</td>
            <td>{costItem.category}</td>
            <td>{costItem.comment}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
