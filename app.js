const express = require('express');
const morgan = require('morgan');
const giftExchange = require('./routes/gift-exchange')

const app = express();

// Mounting
app.use(morgan('tiny'));
app.use(express.json()); // Middleware Parsing, automatically parses incoming req
app.use('/gift-exchange', giftExchange); // Gift-exchange Route

// Get Request Handler
app.get('/', (req, res) => {
    res.send({ "ping": "pong" });
    res.status(200).send('Success!');
});

module.exports = app; 