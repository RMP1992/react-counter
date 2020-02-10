import React, { Component } from 'react'

export default class Home extends Component {
    state={
        counter: 0
    }
    increment = () =>{
        this.setState({
            counter: this.state.counter +1
        })
    };

    decrement = () => {
        if(this.state.counter > 0){
            this.setState({
                counter: this.state.counter -1
            })
        }else{
            alert(`Sorry can't allow negative numbers`)
        }
        
        }
    
    
    
    render() {
        return (
            <div>
                <h1>Bring it back y'all</h1>
                <div id="counter">
                    <h2>{this.state.counter}</h2>
                </div>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement} id="decrement">Decrement</button>
            </div>
        )
    }
}

