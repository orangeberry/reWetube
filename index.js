const express = require('express')
const app = express()

const PORT = 2000;

function handleListening() {
    console.log(`Listening on: http://localhost:${PORT}`)
}

function handleHome(req, res){
    res.send("This is home")
}

function handleProfile(req, res){
    res.send("This is Profile")
}

app.get("/", handleHome)

app.get("/profile", handleProfile)

app.listen(PORT, handleListening)