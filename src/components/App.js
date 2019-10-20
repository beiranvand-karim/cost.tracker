import ButtonDropdownButtonContainer from './ButtonDropdownContainer';
import ModalContainer from './ModalContainer';
import {Button} from 'reactstrap';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import CostTable from './CostTable';
import SumOfTransactions from './SumOfTransactions';
import '../styles/App.scss';

function App() {

   const [modal, setModal] = useState(false);
   const toggle = () => setModal(!modal);

   const {costs} = useSelector(state => state.costs);

   return (
      <div className="my-container">
         <Button color="primary" className="some-item" onClick={toggle}>add a cost</Button>
         <ButtonDropdownButtonContainer className="some-item"/>
         <SumOfTransactions className="some-item"/>
         <ModalContainer toggle={toggle} modal={modal} setModal={setModal}/>
         <CostTable costs={costs}/>
      </div>
   );
}

export default App;
