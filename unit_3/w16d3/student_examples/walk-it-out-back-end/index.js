const express = require('express')
const parser = require('body-parser')
const cors = require('cors')
const passport = require('./config/passport.js')()

const dogController = require('./controllers/dogs.js')
const userController = require('./controllers/users')
const app = express()

app.use(passport.initialize())
app.use(cors())
app.use(parser.json())

app.use('/api/dogs', dogController)
app.use('/users', userController)

app.listen(3001, () => console.log('Listening on port 3001 :)'))
//port 3001 wont behave in dev environment//