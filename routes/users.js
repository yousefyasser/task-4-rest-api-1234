const express = require('express')
const router = express.Router()
const user = require('../models/user')

// create a user
router.post('/', async(req, res) => {
    let User = new user({
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber
    })

    try{
        User = await User.save()
        res.redirect('/')
    }catch(err){
        res.status(400).json({message: err.message})
    }
})

// get one user
router.get('/', async(req, res) => {
    let User
    try{
        User = await user.findOne({name: req.query.name})
        if(User == null){
            res.render('return.ejs')
        }else{
            res.render('success.ejs', {'getUser': User})
        }

    }catch(err){
        return res.status(500).json({message: err.message})
    }
})

// delete a user
router.get('/delete', async(req, res) => {
    let User, tmp
    try{
        tmp = await user.findOne({name: req.query.name})
        User = await user.deleteOne({name: req.query.name})
        if(tmp == null){
            res.render('return.ejs')
        }else{
            res.render('success.ejs', {'getUser': tmp})
        }

    }catch(err){
        return res.status(500).json({message: err.message})
    }
})

module.exports = router