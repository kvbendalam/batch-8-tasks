const express = require('express')

const app = express()

app.get("/", handleRoot)
app.get("/info", handleInfo)
app.get("/employee/:id", handleEmployee)


function handleRoot(request, response) {
    response.send("This root route")
}

function handleInfo(request, response) {
    response.send("Info")
}

function handleEmployee(request, response) {
    let id = request.params.id;
    response.send(id)
}

app.listen(3000, () => {
    console.log("Server is running on 3000")
})