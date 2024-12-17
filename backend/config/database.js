import mongoose from 'mongoose'
import { config } from 'dotenv'

config()

const dbConnectionString = process.env.NODE_ENV === 'production' ? process.env.PROD_DB_STRING : process.env.DEV_DB_STRING

const connect = (callback) => {
    mongoose.connect(dbConnectionString)
      .then(() => {
        console.log('Database connected')
        callback()
      })
      .catch((error) => {
        console.log(`Error connecting to DB: ${error}`)
        callback()
      })
}
  
export default { connect }