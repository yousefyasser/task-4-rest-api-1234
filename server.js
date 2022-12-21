require('dotenv').config()
const mongoose = require('mongoose')
const { urlencoded } = require('express')
const express = require('express')
const ejs = require('ejs')
const app = express()
const mongodb_uri = 'mongodb+srv://Team_8:IEEE_Team_8@cluster0.8yckj9s.mongodb.net/?retryWrites=true&w=majority'

mongoose.set('strictQuery', true)
mongoose.connect(mongodb_uri)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.error('connected to database'))

app.use(express.json())
app.use(urlencoded({extended: false}))
app.set('view engine', 'ejs')

const homeRouter = require('./routes/home')
const usersRouter = require('./routes/users')
app.use('/', homeRouter)
app.use('/users', usersRouter)

app.listen(3000, () => console.log('server started'))
