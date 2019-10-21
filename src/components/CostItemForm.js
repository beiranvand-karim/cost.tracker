import { addSourceCostItemAction } from "../actions/sourceCostItemsActions";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { addCostItemAction } from "../actions/costItemsActions";
import { costCategories } from "../config/costCategories";
import React, { Component } from "react";
import { connect } from "react-redux";

const firstCategory = () => Object.keys(costCategories)[0];

export class CostItemForm extends Component {
  state = {
    cost: "",
    category: firstCategory(),
    comment: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    const { category, cost, comment } = this.state;
    this.setState({ cost });
    this.setState({ comment });
    const tempCostItem = { category, cost, comment };
    this.props.addSourceCostItemAction(tempCostItem);
    this.props.addCostItemAction(tempCostItem);
    this.clearForm();
    this.props.toggle();
  };

  clearForm = () => {
    this.setState({ cost: "" });
    this.setState({ category: firstCategory() });
    this.setState({ comment: "" });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    const { cost, category, comment } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="cost">Cost</Label>
          <Input
            type="input"
            name="cost"
            id="cost"
            placeholder="cost here..."
            value={cost}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="category">Category</Label>
          <Input
            type="select"
            name="category"
            id="category"
            value={category}
            onChange={this.handleChange}
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
            onChange={this.handleChange}
            placeholder="comment here..."
          />
        </FormGroup>
        <Button color="primary" type="submit">
          add cost
        </Button>{" "}
        <Button color="secondary" onClick={this.props.toggle}>
          Cancel
        </Button>
      </Form>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  addSourceCostItemAction: cost => dispatch(addSourceCostItemAction(cost)),
  addCostItemAction: cost => dispatch(addCostItemAction(cost))
});
export default connect(
  null,
  mapDispatchToProps
)(CostItemForm);
