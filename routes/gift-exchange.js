const express = require('express');
const router = express.Router();
const GiftExchange = require('../models/gift-exchange');
const BadRequestError = require('../utils/errors').default;

router.route('/pairs').post((req, res, next) => {
    try {
        let names = req.body.names;
        const pairings = GiftExchange.pairs(names);
        res.send(pairings);
        res.status(200).send('Success!');
    }
    catch (err) {
        const error = new BadRequestError;
        res.status(error.status).send(error.message);
    }
});

router.route('/traditional').post((req, res, next) => {
    try {
        let names = req.body.names;
        const pairings = GiftExchange.traditional(names);
        res.send(pairings);
        res.status(200).send('Success!');
    }
    catch (err) {
        const error = new BadRequestError;
        res.status(error.status).send(error.message);
    }
});

module.exports = router;