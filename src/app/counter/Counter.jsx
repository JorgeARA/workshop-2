import React, { Component } from 'react';
import './style.scss'

class Counter extends Component {

    constructor(){
        super()
        this.state = {
            number: 1,
            title: 'Contador'
        }
        this.plus = this.plus.bind(this)
        this.minus = this.minus.bind(this)
    }

    componentDidMount() {
        this.setState((state) => {
            return {
                ...state,
                number: 5
            }
        })
    }

    minus() {
        this.setState((currentState) => {
            return {
                ...currentState,
                number: currentState.number - 1
            }
        })
    }

    plus() {
        this.setState((state) => {
            return {
                ...state,
                number: state.number + 1
            }
        })
    }

    render() {
        return (
            <>
            <h3>{this.state.title}</h3>
            <div className='counter__container'>
                <button onClick={this.minus}>-</button>
                <span>{this.state.number}</span>
                <button onClick={this.plus}>+</button>
            </div>
            </>
        )
    }
}

export default Counter;