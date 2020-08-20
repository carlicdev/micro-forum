const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('../passport/passport');

const User = require('../models/user');

// get user session
router.get('/', (req, res) => {
    res.send('hello world')
});

// Register new user
router.post('/signin', (req, res) => {
    const { username, email, password } = req.body;

    const newUser = new User({
        _id: new mongoose.Types.ObjectId,
        username, 
        email,
        password
    });

    newUser.save()
        .then(result => {
            res.status(201).json({
                msg: 'You have been registred',
                user: result
            })
        }).catch(err => {
            res.status(500).json({
                msg: 'The process of registration wasn´t successfull. Please try again',
                error: err.message
            });
        });
});

// Login
router.post('/login', passport.authenticate('local'), (req, res) => {
    console.log('Authenticated! Logged as: ' + req.user);
    res.status(200).send({user: req.user});
});

// Logout
router.post('/logout', (req, res) => {
    if(req.user) {
        req.session.destroy();
        res.clearCookie('connect.sid');
        console.log('session destroyed');
        return res.status(201).json({
            msg: 'see you soon'
        });
    } else {
        return res.json({msg: 'no user to logout'});
    }
});

module.exports = router;