const express = require('express')
const app = express()
const port = 4000

app.get('/', (request, response) => {
    response.send('Hello World!')
})

app.listen(port, () => {
    console.log(`The App is listening on port ${port}`)
})
