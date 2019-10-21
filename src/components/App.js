import DropdownContainer from "./CostItemCategoriesDropdown";
import CostItemsTotalSum from "./CostItemsTotalSum";
import CostItemsTable from "./CostItemsTable";
import ModalContainer from "./ModalContainer";
import { Grid, Row } from "../styles/styles";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import Shield from "./Shield";

export class App extends Component {
  state = {
    modal: false
  };

  toggle = () =>
    this.setState(prevState => ({
      modal: !prevState.modal
    }));

  render() {
    const { costItems } = this.props;
    return (
      <Grid>
        <Row />
        <Row>
          <Button color="primary" onClick={this.toggle}>
            add a cost
          </Button>
        </Row>
        <Row>
          <Shield>
            <CostItemsTotalSum costItems={costItems} />
          </Shield>
        </Row>
        <Row>
          <Shield>
            <DropdownContainer />
          </Shield>
          <Shield>
            <ModalContainer toggle={this.toggle} modal={this.state.modal} />
          </Shield>
        </Row>
        <Row>
          <Shield>
            <CostItemsTable costItems={costItems} />
          </Shield>
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  costItems: state.costItems.costItems
});
export default connect(mapStateToProps)(App);
