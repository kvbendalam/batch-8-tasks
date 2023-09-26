import React, { Component } from 'react'

var interval = ''

export default class Lifecycle3 extends Component {

    componentDidMount() {
        interval = setInterval(() => {
            console.log("Hi")
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(interval)
    }


    render() {
        return (
            <div>Lifecycle3</div>
        )
    }
}
