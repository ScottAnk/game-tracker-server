const express = require('express')
const cors = require('cors')

const ENV = require('./config/env')
const mongoose = require('./db/connection')
const requestLogger = require('./lib/requestLogger')

const app = express()

app.use(cors({origin: 'http://127.0.0.1:5500'}))
app.use(express.json())
app.use(requestLogger)

const userRoutes = require('./routes/userRoutes')
const gameRoutes = require('./routes/gameRoutes')
app.use(userRoutes)
app.use('/games', gameRoutes)

app.listen(ENV.EXT_PORT, () => console.log(`listening on port ${ENV.EXT_PORT}`))
