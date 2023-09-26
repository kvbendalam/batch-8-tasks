import React, { Component } from 'react'


export default class Company extends Component {

    constructor() {
        super()
        this.state = {
            company: [
                { id: 1, name: "Krishna", age: 28, company: "Capgemini", salary: 300000 },
                { id: 2, name: "Latessh", age: 29, company: "Entri", salary: 400000 },
                { id: 3, name: "Teja", age: 45, company: "Swiggy", salary: 50000 },
                { id: 4, name: "Suresh", age: 34, company: "Goolge", salary: 60000 }
            ]
        }
    }

    render() {
        return (
            <div>
                {this.state.company.map((employee) => {
                    return (
                        <div key={employee.id} style={{ border: "1px solid black", margin: "10px" }} >
                            <p style={{ color: "blue" }} >Employee Name: {employee.name}</p>
                            <p >Age : {employee.age}</p>
                            <p >Company: {employee.company}</p>
                            <p >Salary :{employee.salary}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}
