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
            //Se debe de poner newValue[(newValue.length) - 1].label ya que si se tienen
            //Seleccionados varios valores y se decide crear uno, este array viene con todos los que
            //Ya selecciono más el nuevo, este nuevo siempre será el último, por lo que en ese caso
            //Se sacaría el último. Además se le hace el splice para eliminar el último elemento de los valores seleccionados
            //Y así asignar que se quede seleccionados los que ya estaban y el  nuevo se agregue a la lista
            //Esto es más que nada por la base de datos.
            listaPersonas.push({ label: newValue[(newValue.length) - 1].label, value: newValue[(newValue.length) - 1].label });
            newValue.splice(-1, 1);
            this.setState({ personas: listaPersonas, persona: newValue });
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
            var nombres = "";
            this.state.persona.map(persona => nombres += persona.label + ", ")
            alert("La (s) persona (s) seleccionada es: " + nombres);
        }
    }

    render() {
        return (
            <div>
                <br></br>
                <h1>Multiple Simple Add:</h1>
                Digite el nombre de la persona, si este no existe aparecerá el boton para crearlo en el mismo select
                <br></br>
                <CreatableSelect
                    onChange={this.handleChangeCreatePerson}
                    isMulti
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