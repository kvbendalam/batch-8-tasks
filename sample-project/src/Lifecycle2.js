import React, { Component } from 'react'

export default class Lifecycle2 extends Component {

    constructor() {
        super();
        this.state = {
            age: 27
        }
    }


    componentDidMount() {
        setTimeout(() => {
            this.setState({ age: 30 });
        }, 4000);
    }

    componentDidUpdate() {
        document.getElementById('disclaimer').innerHTML = this.state.age;
    }


    render() {
        return (
            <div id="disclaimer">{this.state.age}</div>
        )
    }
}
