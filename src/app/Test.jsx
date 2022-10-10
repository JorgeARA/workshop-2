import React, { Component } from 'react';

class Test extends Component {

    constructor(props) {
        super(props)
        this.state = {
            listMenu: [
                {name: 'blbla'}
            ]
        }
    }

    url = 'https://my-json-server.typicode.com/hispanos/db-guappjolotas/categories';

    componentDidMount() {
        this.getData()
    }

    async getData() {
        const response = await fetch(this.url);
        const newData = await response.json();
        this.setState((state) => {
            const newState = {
                listMenu: [
                    ...state.listMenu,
                    ...newData
                ]
            }
            console.log(newState)
            return newState
        })
    }

    render() {
        return (
            <nav>
                <ul>
                    {
                        this.state.listMenu.map((element, index) => (
                            <li key={index}>{element.name}</li>
                        ))
                    }
                </ul>
            </nav>
        )
    }
}

export default Test;