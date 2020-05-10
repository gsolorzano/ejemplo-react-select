import React from 'react';
import Select from "./components/select-simple"
import SelectModal from "./components/select-simple-modal"
import SelectAdd from './components/select-simple-add'
import MultipleSelect from './components/select-multiple'
import MultipleSelectAdd from './components/select-multiple-add'
import MultipleSelectModal from './components/select-multiple-modal'
import {
  Container,
  Row,
  Col
} from "reactstrap";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col></Col>
          <Col xs="6">
            <Select />
            <SelectModal />
            <SelectAdd />
            <MultipleSelect />
            <MultipleSelectModal />
            <MultipleSelectAdd />
            </Col>
          <Col></Col>
        </Row>
        <br></br>
      </Container>
    </div>
  );
}

export default App;
