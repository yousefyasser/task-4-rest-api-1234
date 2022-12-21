const express = require('express')
const router = express.Router()
const user = require('../models/user')

router.get('/', (req, res) => {
    res.render('home.ejs')
})

router.get('/createUser', (req, res) => {
    res.render('createUser.ejs')
})

router.get('/getUser', (req, res) => {
    res.render('getUser.ejs');
})

router.get('/getAllUsers', (req, res) => {
    user.find({}).exec(function(err, users) {   
        if (err) throw err;
        res.render('getAllUsers.ejs', { "users": users });
    })
})

router.get('/deleteUser', (req, res) => {
    res.render('deleteUser.ejs')
})

module.exports = router