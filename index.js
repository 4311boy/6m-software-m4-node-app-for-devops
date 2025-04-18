require("dotenv").config();
const express = require('express')
const app = express()

// Use the PORT environment variable provided by Heroku
const PORT = process.env.PORT || 3000;

const print = require("./controller");

app.get('/', print);

app.listen(process.env.PORT, ()=>{
    console.log(`Listening to port ${process.env.PORT}`)
})