import React from "react";
import { Button } from "reactstrap";
import CreatableSelect from 'react-select/creatable';

const listaPersonas = [
    { label: "Gabriel Solórzano", value: 1 },
    { label: "Paolo Blanco", value: 2 },
    { label: "Jair Cordero", value: 3 },
    { label: "Carlos Gómez", value: 4 },
]

class SimpleSelectAdd extends React.Component {

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

    handleChangeCreatePerson = (newValue, actionMeta) => {
        if (actionMeta.action === 'create-option') {
            listaPersonas.push({ label: newValue.label, value: newValue.label });
            //Si se quiere que aparezca seleccionada la persona que se creo se debe poner en el setState persona así
            //persona: this.state.personas[(newValue.length)-1]
            //para que se le asigne la última opción de la lista de personas que es la que se creo
            this.setState({ personas: listaPersonas, persona: null });
        }
        else if (actionMeta.action === 'select-option') {
            this.setState({ persona: newValue });
        }
        else if (actionMeta.action === 'remove-value' || actionMeta.action === 'clear') {
            this.setState({ persona: newValue });
        }
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
                <h1>Select Simple Add:</h1>
                Digite el nombre de la persona, si este no existe aparecerá el boton para crearlo en el mismo select
                <br></br>
                <CreatableSelect
                    onChange={this.handleChangeCreatePerson}
                    value={this.state.persona}
                    options={this.state.personas}
                    placeholder={'Seleccione una persona'}
                    formatCreateLabel={() => `Crear esta persona`}
                />
                <br></br>
                <center>
                    <Button type="button" color="primary" onClick={() => this.handleClick()}>Submit</Button>
                </center>
            </div>
        );
    }
}

export default SimpleSelectAdd;