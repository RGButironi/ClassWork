const express = require('express');

const quoteCards = require('../models/quoteCards');

const router = express.Router();

router
    .get('/quoteCards', (req, res) => res.send(quoteCards) )
    .post('/quoteCards', (req, res) => {
        quoteCards.add(request.query.text);
        res.send(quoteCards[quoteCards.list.length - 1]);
    }
    )

    module.exports = router;