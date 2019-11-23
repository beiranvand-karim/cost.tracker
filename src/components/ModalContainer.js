import { Modal, ModalBody, ModalHeader } from "reactstrap";
import React from "react";
import { CostItemForm } from ".";

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
