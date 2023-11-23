const express = require('express')
const jwt = require('jsonwebtoken')

const app = express();

app.use(express.json())

app.post("/login", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;


    const payload = { data: username }
    const secret = "klasjdflasdjflkasdjf394lkdsaflkasdj@32323)))kdkdkdkdk"

    const token = jwt.sign(payload, secret)

    res.send({ token: token })
})


function verifyToken(req, res, next) {
    const secret = "klasjdflasdjflkasdjf394lkdsaflkasdj@32323)))kdkdkdkdk"
    const token = req.headers['authorization']

    jwt.verify(token, secret, (err, payload) => {
        if (err) {
            return res.sendStatus(403)
        }
        req.payload = payload;
        next()
    })
}

const courses = [
    {
        title: "FSD",
        author: "Krishna"
    },
    {
        title: "FE",
        author: "Vamsi"
    },
    {
        title: "BE",
        author: "Krishna"
    }
]

app.get("/course", verifyToken, async (req, res) => {
    const name = req.payload.data;
    res.json(courses.filter(c => c.author === name))
})

app.listen(3000, () => {
    console.log("Server is running on 3000...")
})