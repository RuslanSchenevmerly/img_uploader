import express from 'express'
import path from 'path'
import cors from 'cors'
import bodyParser from 'body-parser'
import morgan from 'morgan'

const PORT = process.env.PORT || 8081

const app = express()
app.use(bodyParser.json())
app.use(morgan('combined'))
app.use(cors())

app.get('/status', (request, response) => {
    response.send({
        message: 'hello world'
    })
})

app.listen(PORT, () => {
    `Server has been started on port ${PORT}...`
})