import React from "react";
import Select from 'react-select';
import { Button } from "reactstrap";

const listaPersonas = [
    { label: "Gabriel Solórzano", value: 1 },
    { label: "Paolo Blanco", value: 2 },
    { label: "Jair Cordero", value: 3 },
    { label: "Carlos Gómez", value: 4 },
]

class MultipleSelect extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            persona: null,
            personas: []
        };
    }

    componentDidMount() {
        this.setState({ personas: listaPersonas });
    }

    handleChangePersona = persona => {
        this.setState({ persona });
    };

    handleClick = () => {
        if (this.state.persona != null) {
            var nombres = "";
            this.state.persona.map(persona => nombres += persona.label + ", ")
            alert("La (s) persona (s) seleccionada es: " + nombres);
        }
    }

    render() {
        return (
            <div>
                <br></br>
                <h1>Multiple Simple:</h1>
                <br></br>
                <Select
                    value={this.state.persona}
                    onChange={this.handleChangePersona}
                    options={this.state.personas}
                    isMulti
                    placeholder={'Seleccione una persona'}
                />
                <br></br>
                <center>
                    <Button type="button" color="primary" onClick={() => this.handleClick()}>Submit</Button>
                </center>
            </div>
        );
    }
}

export default MultipleSelect;