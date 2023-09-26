import React, { Component } from 'react'

export default class EmployeeSalary extends Component {

    constructor() {
        super()
        this.state = {
            empName: "Krishna",
            salary: 10000,
            age: 29,
            place: "Hyderabad"
        }
        this.udpateDetails = this.udpateDetails.bind(this)
    }

    udpateDetails() {
        this.setState({
            empName: "Vamsi",
            salary: "20000",
            age: 30,
            place: "Bangalore"
        })
    }

    render() {
        return (
            <div>
                <h1>EmployeeSalary</h1>
                <p>{this.state.empName}</p>
                <p>{this.state.salary}</p>
                <p>{this.state.age}</p>
                <p>{this.state.place}</p>
                <button onClick={this.udpateDetails}>Update Employee details</button>
            </div>
        )
    }
}
