const http = require('http')

const server = http.createServer(handleCourse)

const course = {
    id: 1,
    name: 'Full stack development',
    price: 30000,
    duration: '3month'
}

function handleCourse(request, response) {
    response.writeHead(200, { 'content-Type': "application/json" })
    response.end(JSON.stringify(course))
}

server.listen(3001, () => {
    console.log("Server is running on 3001")
})