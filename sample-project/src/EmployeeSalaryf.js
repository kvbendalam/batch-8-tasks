import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

function EmployeeSalaryf() {

    let { id } = useParams()

    const [emp, setEmp] = useState({
        empName: "Krishna",
        salary: 10000,
        age: 29,
        place: "Hyderabad"
    });

    const updateEmployeeData = () => {
        setEmp({
            empName: "Vamsi",
            salary: "20000",
            age: 30,
            place: "Bangalore"
        })
    }

    return (
        <div>
            <p>{id}</p>
            <p>{emp.empName}</p>
            <p>{emp.salary}</p>
            <p>{emp.age}</p>
            <p>{emp.place}</p>
            <button onClick={updateEmployeeData}>Update Employee Details</button>
        </div>
    )
}

export default EmployeeSalaryf