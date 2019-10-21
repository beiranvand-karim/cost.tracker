import { addFilteredCostItemsAction } from "../actions/costItemsActions";
import { costCategories } from "../config/costCategories";
import { NO_FILTER } from "../constants/constants";
import React, { Component } from "react";
import { connect } from "react-redux";

const costCategoriesKeys = Object.keys(costCategories);

export class CostItemCategoriesDropdown extends Component {
  handleChange = event => {
    const { value } = event.target;
    if (NO_FILTER === value) {
      this.props.addFilteredCostItemsAction(this.props.sourceCostItems);
      return;
    }
    const CostItems = this.props.sourceCostItems.filter(
      costItem => costItem.category === value
    );
    this.props.addFilteredCostItemsAction(CostItems);
  };

  render() {
    costCategoriesKeys.unshift(NO_FILTER);
    return (
      <div>
        <select onChange={this.handleChange}>
          {costCategoriesKeys.map((costCategory, index) => {
            return (
              <option key={index} value={costCategory}>
                {costCategory}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addFilteredCostItemsAction: costItems =>
    dispatch(addFilteredCostItemsAction(costItems))
});
const mapStateToProps = state => ({
  sourceCostItems: state.sourceCostItems.costItems
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CostItemCategoriesDropdown);
