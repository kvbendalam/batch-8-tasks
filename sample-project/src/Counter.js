import React, { Component } from 'react'

export default class Counter extends Component {

    clickFunction = () => {
        console.log("Button is clicked")
    }

    handleChange = (event) => {
        console.log(event.target.value)
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.handleChange} />
                <button onClick={this.clickFunction}>Click here</button>
            </div>
        )
    }
}
