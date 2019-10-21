import { Modal, ModalBody, ModalHeader } from "reactstrap";
import CostItemForm from "./CostItemForm";
import React from "react";

export function ModalContainer({ modal, toggle }) {
  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Add A Cost</ModalHeader>
      <ModalBody>
        <CostItemForm toggle={toggle} />
      </ModalBody>
    </Modal>
  );
}
export default ModalContainer;
