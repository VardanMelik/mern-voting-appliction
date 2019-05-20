const express = require('express')
const handle = require('./handlers')

const app = express()

// Post variable
const port = process.env.port || 4000

// Get request 
app.get('/', (req, res) => {
    res.json({ message: "Server is working" })
})


// MiddleWare Function
app.use(handle.notFound)

// Handeling Errors
app.use(handle.errorHandler)


app.listen(port, (req, res) => {
    console.log(`Server was started on port: ${port}`)
})