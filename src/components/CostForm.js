import {Form, FormGroup, Input, Label} from 'reactstrap';
import {categories} from '../config/categories';
import React from 'react';

export default function CostForm({cost, setCost, category, setCategory, comment, setComment}) {
   return (
      <Form>
         <FormGroup>
            <Label for="exampleEmail">Cost</Label>
            <Input
               type="email"
               name="email"
               id="exampleEmail"
               placeholder="cost here..."
               value={cost}
               onChange={(e) => setCost(e.target.value)}
            />
         </FormGroup>
         <FormGroup>
            <Label for="exampleSelect">Select</Label>
            <Input
               type="select"
               name="select"
               id="exampleSelect"
               value={category}
               onChange={(e) => setCategory(e.target.value)}
            >
               {
                  Object.keys(categories).map((category, index) => <option key={index}>{category}</option>)
               }
            </Input>
         </FormGroup>
         <FormGroup>
            <Label for="examplePassword">Comment</Label>
            <Input
               type="input"
               name="comment"
               id="comment"
               value={comment}
               onChange={(e) => setComment(e.target.value)}
               placeholder="comment here..."
            />
         </FormGroup>
      </Form>
   )
}
