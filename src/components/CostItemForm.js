import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { costCategories } from "../config";
import { addSourceCostItemAction, addCostItemAction } from "../actions";

const firstCategory = () => Object.keys(costCategories)[0];

export function CostItemForm({ toggle }) {
  const [cost, setCost] = useState("");
  const [comment, setComment] = useState("");
  const [category, setCategory] = useState(firstCategory());
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    setCost(cost);
    setComment(comment);
    const tempCostItem = { category, cost, comment };
    dispatch(addSourceCostItemAction(tempCostItem));
    dispatch(addCostItemAction(tempCostItem));
    clearForm();
    toggle();
  };

  const clearForm = () => {
    setCost("");
    setCategory(firstCategory());
    setComment("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="cost">Cost</Label>
        <Input
          type="input"
          name="cost"
          id="cost"
          placeholder="cost here..."
          value={cost}
          onChange={event => setCost(event.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="category">Category</Label>
        <Input
          type="select"
          name="category"
          id="category"
          value={category}
          onChange={event => setCategory(event.target.value)}
        >
          {Object.keys(costCategories).map((category, index) => (
            <option key={index}>{category}</option>
          ))}
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="comment">Comment</Label>
        <Input
          type="input"
          name="comment"
          id="comment"
          value={comment}
          onChange={event => setComment(event.target.value)}
          placeholder="comment here..."
        />
      </FormGroup>
      <Button color="primary" type="submit">
        add cost
      </Button>{" "}
      <Button color="secondary" onClick={toggle}>
        Cancel
      </Button>
    </Form>
  );
}
