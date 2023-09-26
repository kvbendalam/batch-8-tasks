import React, { Component } from 'react'

export default class Person extends Component {

    constructor() {
        super();
        this.state = {
            name: "Krishna",
            company: "Entri",
            place: "Hyderabad",
        }
    }

    updateDetails = () => {
        this.setState({
            name: "Vamsi",
            company: "Cognizant",
            place: "Bangalore"
        })
    }


    render() {
        return (
            <div>
                Name : {this.state.name}
                Company: {this.state.company}
                Place : {this.state.place}
                <button onClick={this.updateDetails}>Update Details</button>
            </div>
        )
    }
}
