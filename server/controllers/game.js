const express = require('express');

const quoteCards = require('../models/quoteCards');
const game = require('../models/Game');
const router = express.Router();

game.SubmitCaption("Corona sucks", 0)
router
    .use('/quoteCards', (req, res, next) => {
        console.log({method: req.method, body: req.body});
        next();
    })
    .get('/quoteCards', (req, res) => res.send(quoteCards) )
    .post('/quoteCards', (req, res) => {
        quoteCards.add(req.body.text);
        res.send(quoteCards.list[quoteCards.list.length - 1]);
    })

    .get('/', (reg, res) => res.send(game) )
    .post('/cardsInPlay', (req, res) => {
        const playerId = 0;
        game.SubmitCaption(reg.body.caption, playerId)
    } )
module.exports = router;