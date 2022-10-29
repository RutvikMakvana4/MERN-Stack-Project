const dotenv = require('dotenv');
const express = require('express');
const app = express();


dotenv.config({path:'./config.env'});
require('./db/conn');
// const User = require('./model/userSchema');

app.use(express.json());

// ink router file
app.use(require('./router/auth'));

const PORT = process.env.PORT;




// middleware
const middleware = (req, res, next) => {
    console.log("middleware");
    next();
}



// Routes 

app.get('/', (req, res) => {
    res.send('hello world from the server');
});

app.get('/about',middleware, (req, res) => {
    res.send('About us Page');
});

app.get('/contact', (req, res) => {
    res.send('Contact Page');
});

app.get('/signin', (req, res) => {
    res.send('Login page');
});
app.get('/signup', (req, res) => {
    res.send('Registration page');
});

app.get('/', (req, res) => {
    res.send('hello world from the server');
});

app.listen(PORT, () => {
    console.log(`server is running at port no. ${PORT}`);
});