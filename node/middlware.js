const express = require('express')

const app = express();

app.use(abc)

function abc(req, res, next) {
    console.log("This is global middle ware")
    next()
}

app.get("/", sayHi, sayHello)


function sayHi(req, res, next) {
    res.send("Hi from Endpoint")
    req.company = "Infosys"
    next()
}

function sayHello(req, res) {
    console.log("Person is from ", req.company)
}

app.listen(3000, () => {
    console.log("Server is running on 3000...")
})