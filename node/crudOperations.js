const express = require('express')
const mysql = require('mysql2')

const { readEmployee, readEmployeeById, insertEmployee } = require('./Operations')

const app = express()

app.use(express.json())

const connection = mysql.createPool(
    {
        host: "127.0.0.1",
        user: "root",
        password: "password",
        database: "school"
    }).promise()

async function deleteEmp(id) {
    const query = "delete from Employee where id = ?"
    const values = [id]

    const [output] = await connection.query(query, values)
    return output
}

async function updateEmp(id, city) {
    const query = "UPDATE Employee SET city =? where id=?"
    const values = [city, id];

    const ress = await connection.query(query, values)
    return ress;
}

app.get("/getEmployee", async (req, res) => {
    const result = await readEmployee()
    res.send(result)
})

app.get("/readEmployeeById/:id", async (req, res) => {
    const id = req.params.id
    const result = await readEmployeeById(id)
    res.send(result)
})


app.delete("/deleteEmp/:id", async (req, res) => {
    const id = req.params.id;
    const emp = await deleteEmp(id);
    res.send(emp)
})

app.post("/new", async (req, res) => {
    const { id, name, city, salary, age } = req.body;
    const ress = await insertEmployee(id, name, city, salary, age)
    res.send(ress);
})

app.put("/update", async (req, res) => {
    const { id, city } = req.body;
    const updatedEmp = updateEmp(id, city)
    res.send(updatedEmp)
})



app.listen(3000, () => {
    console.log("Server is running!")
})