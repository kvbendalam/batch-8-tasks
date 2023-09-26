import React, { Component } from 'react'

export default class IncrementCounter extends Component {
    constructor() {
        super()
        this.state = {
            counter: 0
        }
        this.incrementCounter = this.incrementCounter.bind(this)
    }

    incrementCounter() {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render() {
        return (
            <div>
                <h1>Increment Counter</h1>
                <p>{this.state.counter}</p>
                <button onClick={this.incrementCounter}>Increment Counter value</button>
            </div>
        )
    }
}
