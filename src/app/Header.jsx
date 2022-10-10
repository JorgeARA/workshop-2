import React, { Component } from 'react';
import './style.scss'

class Counter extends Component {
    componentDidMount() {

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