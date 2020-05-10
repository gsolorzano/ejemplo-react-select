import React from "react";
import Select from 'react-select';
import {
    Button,
    Row,
    Col,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Label,
    Input
} from "reactstrap";

var listaPersonas = [
    { label: "Gabriel Solórzano", value: "Gabriel Solórzano" },
    { label: "Paolo Blanco", value: "Paolo Blanco" },
    { label: "Jair Cordero", value: "Jair Cordero" },
    { label: "Carlos Gómez", value: "Carlos Gómez" },
]

class SimpleSelectModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            persona: null,
            personas: [],
            modal: false,
            nombre: ""
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.setState({ personas: listaPersonas });
    }

    handleChangePersona = persona => {
        this.setState({ persona });
    };

    handleClick = () => {
        if (this.state.persona != null) {
            alert("La persona seleccionada es: " + this.state.persona.label);
        }
    }

    crearPersona = () => {
        listaPersonas.push({ label: this.state.nombre, value: this.state.nombre });
        this.setState({ personas: listaPersonas , nombre: ""});
        this.toggleModal();
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    };

    toggleModal() {
        this.setState({ modal: !this.state.modal });
    }

    render() {
        return (
            <div>
                <br></br>
                <h1>Select Simple con Modal:</h1>
                <br></br>
                <Row>
                    <Col>
                        <Select
                            value={this.state.persona}
                            onChange={this.handleChangePersona}
                            options={this.state.personas}
                            placeholder={'Seleccione una persona'}
                        />
                    </Col>
                    <Col xs="1">
                        <Button type="button" color="primary" onClick={() => this.toggleModal()}>+</Button>
                    </Col>
                </Row>

                <br></br>
                <center>
                    <Button type="button" color="primary" onClick={() => this.handleClick()}>Submit</Button>
                </center>
                <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleFactura}>Creación de Persona con Modal</ModalHeader>
                    <ModalBody>
                        <Label>Nombre:</Label>
                        <Input
                            placeholder="Nombre"
                            type="text"
                            id="nombre" name="nombre" value={this.state.nombre} onChange={this.handleChange}
                            required
                        />
                        <br></br>

                        <center>
                            <Button color="primary" type="submit" onClick={() => this.crearPersona()}>Crear Persona</Button>
                        </center>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggleModal}>Cancelar</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default SimpleSelectModal;