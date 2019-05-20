const express = require('express')

const app = express()

// Post variable
const port = process.env.port || 4000

// Get request 
app.get('/', (req, res) => {
    res.json({ message: "Server is working" })
})


// MiddleWare Function
app.use((req, res, next) => {
        const err = new Error('Not Found')
        err.status = 404

        next(err)
    })
    // Handeling Errors
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        err: err.message || 'Something went wrong'
    })
})


app.listen(port, (req, res) => {
    console.log(`Server was started on port: ${port}`)
})