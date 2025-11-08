require('dotenv').config();
const express = require('express');
const app = express();
const port = 4000;  

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/twitter', (req, res) => {
    res.send('This is the twitter page.');
});

app.get('/facebook', (req, res) => {
    res.send('This is the facebook page.');
}); 

app.get('/youtube', (req, res) => {
    res.send("<h2>This is the youtube page.</h2>");
});

app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});