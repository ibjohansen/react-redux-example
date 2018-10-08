// En veldig enkel backend for å emulere en backend som backend opp data

const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000
const data = require('./database')

app.use(cors())

app.get('/', (req, res) => res.send(data))

app.listen(port, () => console.log(`Backend listening on  ${port}, serving up 10 votes`))
