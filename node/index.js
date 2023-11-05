const http = require('http')

const server = http.createServer(handleServer)

function handleServer(req, res) {
    res.writeHead(200)
    res.end("Hello")
}

server.listen(3000, () => {
    console.log("Server is running on 3000")
})