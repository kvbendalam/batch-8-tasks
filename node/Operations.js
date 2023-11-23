const mysql = require('mysql2')

const connection = mysql.createPool(
    {
        host: "127.0.0.1",
        user: "root",
        password: "password",
        database: "school"
    }).promise()

async function readEmployee() {
    const query = "SELECT * FROM Employee"
    try {
        const [output] = await connection.query(query)
        return output;
    } catch (error) {
        console.log(error)
    }
}

async function readEmployeeById(id) {
    const query = "SELECT * FROM Employee where id=?";
    const values = [id];

    try {
        const [output] = await connection.query(query, values);
        return output;
    } catch (error) {
        console.log(error);
    }
}

async function insertEmployee(id, name, city, salary, age) {
    const query = "INSERT INTO Employee (id, name, city, salary, age) VALUES (?,?,?,?,?)";
    const values = [id, name, city, salary, age]

    try {
        const [output] = await connection.query(query, values)
        return output
    } catch (error) {
        console.log(error)
    }
}

async function updateEmployee(id, city) {
    const query = "Update Employee SET city = ? WHERE id = ?"
    const values = [city, id];

    try {
        const res = await connection.query(query, values)
        return res
    } catch (error) {
        console.log(error)
    }
}

async function deleteEmp(id) {
    const query = "Delete from Employee where id = ?"
    const values = [id]

    try {
        const res = await connection.query(query, values)
        return id + "is Deleted successfully"
    } catch (error) {
        console.log(error)
    }
}

// async function main() {
// const employee = await readEmployee()
// console.log(employee)

// const emp = await readEmployeeById(5)
// console.log(emp)

// const newEmp = await insertEmployee(6, "Vamsi", "Mumbai", "300000", 49)
// console.log(newEmp)

// const updateEmp = await updateEmployee(1, "Calcutta")
// console.log(updateEmp)

// const del = await deleteEmp(5)
// console.log(del)
// }

// main()


module.exports = { readEmployee, readEmployeeById, insertEmployee, updateEmployee, deleteEmp }