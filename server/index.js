require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const handle = require('./handlers')
const db = require('./models')
const routes = require('./routes')


const app = express()
    // Post variable
const port = process.env.PORT

app.use(cors())
app.use(bodyParser.json())

// Get request 
app.get('/', (req, res) => {
    res.json({ message: "Server is working" })
})
app.use('api/auth', routes.auth)

// MiddleWare Function
app.use(handle.notFound)

// Handeling Errors
app.use(handle.errorHandler)


app.listen(port, (req, res) => {
    console.log(`Server was started on port: ${port}`)
})