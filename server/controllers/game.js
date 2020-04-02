const express = require('express');

const quoteCards = require('../models/quoteCards');
const game = require('../models/Game');
const router = express.Router();

router

    .post('/join', (req, res) => res.send(game.Join(req.body.userId)) )
    .get('/quoteCards', (req, res) => res.send(quoteCards) )
    .post('/quoteCards', (req, res) => {
        quoteCards.add(req.body.text);
        res.send(quoteCards.list[quoteCards.list.length - 1]);
    })

    .get('/', (reg, res) => res.send({
        Players: game.Players, PictureDeck: game.PictureDeck, CurrentPicture: game.CurrentPicture,
        CardsInPlay: game.CardsInPlay.map(x=> ({...x, PlayerId: 'unknown' }) ) 
    }) )
    .post('/cardsInPlay', (req, res) => {
        const playerId = req.body.playerId;
        game.SubmitCaption(req.body.caption, playerId);
        res.send({ success: true})
    } )
module.exports = router;