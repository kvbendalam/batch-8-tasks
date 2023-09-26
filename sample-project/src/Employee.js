import React, { Component } from 'react'

export default class Employee extends Component {

    constructor() {
        super()
        this.state = {
            name: "Lateesh",
            age: 30,
            mobile: "9292929292",
            email: "lateesh@gmail.com",
            companyname: "Entri",
            salary: 200000
        }
    }

    updateDetails = () => {
        this.setState({
            name: "Kannaiah",
            age: 28,
            mobile: "83838383",
            email: "kannaiah@gmail.com"
        })
    }


    render() {
        return (
            <div>
                <h2>Employee Details</h2>
                <p>Name : {this.state.name}</p>
                <p>Age : {this.state.age}</p>
                <p>Mobile :{this.state.mobile}</p>
                <p>Email : {this.state.email}</p>
                <p>Company Name : {this.state.companyname}</p>
                <p>Salary : {this.state.salary}</p>
                <button onClick={this.updateDetails}>Update Employee Details</button>
            </div>
        )
    }
}
