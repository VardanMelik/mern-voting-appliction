const express = require('express')
const handle = require('./handlers')

const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.json({ server: 'It works great!' })
})


app.use(handle.notFound)

app.use(handle.error)


app.listen(port, (res, req) => {
    console.log(`Server was running on port: ${port}`)
})