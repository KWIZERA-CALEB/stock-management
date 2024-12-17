import jwt from 'jsonwebtoken'
import { config } from 'dotenv'


config()

const secretKey = process.env.SECRET_KEY
const secretRefreshKey = process.env.SECRET_REFRESH_KEY

// Generate token
export const generateToken = (userId) => {
    return jwt.sign({ id: userId }, secretKey, {
        expiresIn: '2m'
    })
}

// Generate refresh token
export const generateRefreshToken = (userId) => {
    return jwt.sign({ id: userId }, secretRefreshKey, {
        expiresIn: '7d'
    })
}
