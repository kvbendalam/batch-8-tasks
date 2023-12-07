const mysql = require('mysql2')


const connection = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'password',
    database: 'social_media'
}).promise()


async function readPosts() {
    const output = await connection.query("select * from posts")
    return output[0]
}


async function readUser(profile) {
    const output = await connection.query("select * from users where profile ='" + profile + "' ")
    return output[0]
}

async function insertUser(name, profile, password, headline) {
    const res = await connection.query("insert into users (name, profile, password, headline) values(?,?,?,?)", [name, profile, password, headline]);

}

async function insertPost(profile, content) {
    const res = await connection.query("insert into posts (profile, content, likes, shares) values(?,?,?,?)", [profile, content, 0, 0]);
}


//like function

//share function


//delete function


// async function main() {
//     const result = await readPosts()
//     console.log(result)
// }

// main()

module.exports = { readPosts, readUser, insertPost, insertUser }