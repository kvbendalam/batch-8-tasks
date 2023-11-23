const express = require('express')

const app = express();

app.use(express.json()) //middleware

const { readEmployee, readEmployeeById, insertEmployee, updateEmployee, deleteEmp } = require('./Operations')


app.get("/employess", async (req, res) => {
    const emp = await readEmployee()
    res.send(emp)
})

app.get("/employee/:id", async (req, res) => {
    const id = req.params.id
    const emp = await readEmployeeById(id)
    res.send(emp)
})

app.post("/new", async (req, res) => {
    const { id, name, city, salary, age } = req.body
    const output = await insertEmployee(id, name, city, salary, age)
    res.send(output)
})

app.put("/update", async (req, res) => {
    const { id, city } = req.body
    const output = await updateEmployee(id, city)
    res.send(output)
})

app.delete("/del/:id", async (req, res) => {
    const id = req.params.id;
    const output = await deleteEmp(id)
    res.send(output)
})

app.listen(3000, () => {
    console.log("Server is running...")
})