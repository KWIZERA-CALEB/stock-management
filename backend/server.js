import express from 'express'
import database from './config/database.js'
import cors from 'cors'
import bodyParser from 'body-parser'
import { config } from 'dotenv'
import UserRoute from './routes/UserRoute.js'

config()
const app = express()

const corsOptions = {
    origin: [
        'http://localhost:5173',             
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
}

app.use(cors(corsOptions))
app.use(bodyParser.json())


database.connect((error) => {
    if (error) {
        console.log(`Error to connecting to server: ${error}`)
    }else {
        let PORT = process.env.APP_PORT || 8080
        app.listen(PORT, () => {
            console.log(`Server connected on Port: ${PORT}`)
        })
    }
})

app.use('/api', UserRoute)