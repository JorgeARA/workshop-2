import React, { Component } from 'react';

class Input extends Component {

    constructor() {
        super()
        this.state = {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const value = e.target.value
        this.setState((state) => {
            return {
                value: value
            }
        })
    }

    render() {
        return (
            <>
            <label>{this.props.label}
                <input onChange={this.handleChange} type="text" placeholder={`Escriba su ${this.props.label}`} value={this.state.value} />
            </label>
            <p>{this.state.value}</p>
            </>
        )
    }
}

export default Input;