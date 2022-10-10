import React, { Component } from 'react';
import Input from './Input.jsx';

class Form extends Component {

    listInputs = [
        "Nombre", "Apellido", "Telefono", "Direccion"
    ]

    handleSubmit(e) {
        e.preventDefault();
        console.log('0Enviando')
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {
                    this.listInputs.map((element, index) => (
                        <Input key={index} label={element} />
                    ))
                }
                <button type='submit'>Guardar</button>
            </form>
        )
    }
}

export default Form;