import {Table} from 'reactstrap';
import React from 'react';

export default function CostTable({costs}) {
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
         {
            costs.map((cost, index) => (
               <tr key={index}>
                  <th scope="row">{index}</th>
                  <td>{cost.cost}</td>
                  <td>{cost.category}</td>
                  <td>{cost.comment}</td>
               </tr>
            ))
         }
         </tbody>
      </Table>
   )
}
