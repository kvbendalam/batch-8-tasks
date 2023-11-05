const http = require('http')

const server = http.createServer(handleCourse)

function handleCourse(request, response) {
    response.writeHead(200, { 'content-Type': "text/html" })
    response.end('<h1>Hello world</h1>')
}

server.listen(3000, () => {
    console.log("Server is running on 3000")
})