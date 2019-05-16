require('dotenv').config()
const express = require('express')
const handle = require('./handlers')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json({ server: 'It works great!' })
})


app.use(handle.notFound)
app.use(handle.error)


app.listen(port, (res, req) => {
    console.log(`Server was running on port: ${port}`)
})