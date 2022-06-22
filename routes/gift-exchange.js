const express = require('express');
const router = express.Router();
const GiftExchange = require('../models/gift-exchange');
const { BadRequestError } = require('../utils/errors');

router.route('/pairs').post((req, res, next) => {
    try {
        let names = req.body.names;

        if (names == {}) {
            throw new BadRequestError("Must be array");
        }

        const pairings = GiftExchange.pairs(names);
        res.send(pairings);
        res.status(200).send('Success!');
    }
    catch (err) {
        next(err);
    }
});

router.route('/traditional').post((req, res, next) => {
    try {
        let names = req.body.names;

        if (names == {}) {
            throw new BadRequestError("Must be array");
        }

        const pairings = GiftExchange.traditional(names);
        res.send(pairings);
        res.status(200).send('Success!');
    }
    catch (err) {
        next(err);
    }
});

module.exports = router;