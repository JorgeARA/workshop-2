import React, { Component } from 'react';
import Counter from './counter/Counter.jsx';
import Form from './form/Form.jsx';
import Test from './Test.jsx';

class App extends Component {

    componentDidMount(){
        console.log('Estoy iniciando');
    }

    render(){
        return (
            <main>
                <Test />
                <h1>Hola Mundo</h1>
                <section>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolorum inventore cum a voluptate. Dolorem tenetur, natus dolorum hic ratione adipisci cumque veritatis molestias nulla voluptatibus, quaerat placeat architecto quae.</p>
                </section>
                <Form />
                <Counter />
            </main>
        )
    }
}

export default App;