const express = require('express');

const users = require('../models/Users');

const router = express.Router();

router
    .post('/login', (req, res) => {
        try {
            const users = users.Login(req.body.email, req.body.password);
            res.send( { ...user, Password: null } );
        } catch (error) {
            res.status(401).send({message: error.message});
        }
})

module.exports = router;