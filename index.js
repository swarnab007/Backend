// console.log("JavaScript Backend");
require('dotenv').config();
const express = require('express');

const app = express();
const port = 7000;

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/register', (req, res) => {
    res.send("register page");
})

app.get('/login', (req, res) => {
    res.send("<h3>login page</h3>");
})

app.get('/home', (req, res) => {
    res.send("home page");
})

app.get('/youtube', (req, res) => {
    res.send("youtube page");
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
})