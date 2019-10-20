import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import {addOriginalCostAction} from '../actions/originalCostsActions';
import {addCostAction} from '../actions/filteredCostActions';
import {categories} from '../config/categories';
import {useDispatch} from 'react-redux';
import React, {useState} from 'react';
import CostForm from './CostForm';

const firstCategory = () => Object.keys(categories)[0];

export default function ModalContainer({toggle, modal}) {

   const [cost, setCost] = useState('');
   const [category, setCategory] = useState(firstCategory());
   const [comment, setComment] = useState('');

   const dispatch = useDispatch();

   const addCost = () => {
      setCost(cost);
      const tempCost = {category, cost, comment};
      dispatch(addOriginalCostAction(tempCost));
      dispatch(addCostAction(tempCost));
      clearForm();
      toggle()
   };

   const clearForm = () => {
      setCost('');
      setCategory(firstCategory());
      setComment('');
   };

   return (
      <Modal isOpen={modal} toggle={toggle}>
         <ModalHeader toggle={toggle}>Add A Cost</ModalHeader>
         <ModalBody>
            <CostForm
               setComment={setComment}
               cost={cost}
               comment={comment}
               setCost={setCost}
               category={category}
               setCategory={setCategory}
            />
         </ModalBody>
         <ModalFooter>
            <Button color="primary" onClick={addCost}>add cost</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
         </ModalFooter>
      </Modal>
   )
}
