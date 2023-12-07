const express = require('express')
const hbs = require('hbs')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const { insertUser, readUser, readPosts, insertPost } = require('./operations')

const app = express()
app.use(bodyParser.json())
app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cookieParser())


app.get("/", (req, res) => {
    res.render("login")
})

app.get("/register", (req, res) => {
    res.render("registration")
})

app.post("/addUsers", async (req, res) => {
    if (req.body.password == req.body.confirmpassword) {
        await insertUser(req.body.name, req.body.profile, req.body.password, req.body.headline)
        res.redirect("/")
    } else {
        res.send("Passwords doesn't match")
    }
})

app.post("/login", async (req, res) => {
    const output = await readUser(req.body.profile)
    const password = output[0].password
    if (password === req.body.password) {
        const payload = { "profile": output[0].profile, "name": output[0].name, "headline": output[0].headline }
        const secret = "abcalskdjf3oiuaisuflakjsdflsdkjflaksjfdlkjsfljk"
        const token = jwt.sign(payload, secret)
        res.cookie("token", token)
        res.redirect("/posts")
    } else {
        res.send("Invalid username or password")
    }
})

app.post('/addPosts', async (req, res) => {
    await insertPost(req.body.profile, req.body.content)
    res.redirect('/posts')
})

app.get("/posts", verifyLogin, async (req, res) => {
    const output = await readPosts()
    res.render("posts", {
        data: output,
        userInfo: req.payload
    })
})

app.post('/addPosts', async (req, res) => {
    await insertPost(req.body.profile, req.body.content)
    res.redirect('/posts')
})

function verifyLogin(req, res, next) {
    const secret = "abcalskdjf3oiuaisuflakjsdflsdkjflaksjfdlkjsfljk"
    const token = req.cookies.token
    jwt.verify(token, secret, (err, payload) => {
        if (err) return res.sendStatus(403)
        req.payload = payload
    })
    next()
}

app.get("/posts", (req, res) => {
    res.render("posts")
})

app.listen(3000, () => {
    console.log("Server is running on 3000")
})