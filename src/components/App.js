import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "reactstrap";
import {
  ModalContainer,
  CostItemsTable,
  CostItemsTotalSum,
  CostItemCategoriesDropdown
} from ".";
import { Grid, Row } from "../styles";
import Shield from "./Shield";

export function App() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const costItems = useSelector(state => state.costItems.costItems);

  return (
    <Grid>
      <Row />
      <Row>
        <Button color="primary" onClick={toggle}>
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
          <CostItemCategoriesDropdown />
        </Shield>
        <Shield>
          <ModalContainer toggle={toggle} modal={modal} />
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
