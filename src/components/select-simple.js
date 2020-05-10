import React from "react";
import Select from 'react-select';
import { Button } from "reactstrap";

const listaPersonas = [
    { label: "Gabriel Solórzano", value: 1 },
    { label: "Paolo Blanco", value: 2 },
    { label: "Jair Cordero", value: 3 },
    { label: "Carlos Gómez", value: 4 },
]

class SimpleSelect extends React.Component {

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
            alert("La persona seleccionada es: " + this.state.persona.label);
        }
    }

    render() {
        return (
            <div>
                <br></br>
                <h1>Select Simple:</h1>
                <br></br>
                <Select
                    value={this.state.persona}
                    onChange={this.handleChangePersona}
                    options={this.state.personas}
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

export default SimpleSelect;