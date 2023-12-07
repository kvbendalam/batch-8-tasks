const express = require('express')
const hbs = require('hbs')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const { insertUser, readUser, readPosts, insertPost } = require('./operations')

const app = express()
app.use(bodyParser.json())
app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cookieParser())


mongoose.connect("mongodb://127.0.0.1:27017/cinema", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const screen1Model = mongoose.model('screen1', {
    seatno: { type: Number },
    status: { type: String }
})

const screen2Model = mongoose.model('screen2', {
    seatno: { type: Number },
    status: { type: String }
})

const screen3Model = mongoose.model('screen3', {
    seatno: { type: Number },
    status: { type: String }
})

const moviesModel = mongoose.model('movies', {
    name: { type: String },
    rate: { type: Number },
    screenNo: { type: Number }
})

var screen1Res
screen1Model.find()
    .then((output) => {
        screen1Res = output
    })
    .catch((err) => {
        console.log(err)
    })

var screen2Res
screen2Model.find()
    .then((output) => {
        screen2Res = output
    })
    .catch((err) => {
        console.log(err)
    })

var screen3Res
screen3Model.find()
    .then((output) => {
        screen3Res = output
    })
    .catch((err) => {
        console.log(err)
    })


var moviesRes
moviesModel.find()
    .then((output) => {
        moviesRes = output
    })
    .catch((err) => {
        console.log(err)
    })

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

app.get("/cinema", (req, res) => {
    res.render("cinema", {
        movies: moviesRes,
        screen1: screen1Res,
        screen2: screen2Res,
        screen3: screen3Res
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