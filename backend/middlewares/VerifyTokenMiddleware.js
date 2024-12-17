import jwt from 'jsonwebtoken'
import { config } from 'dotenv'
import { generateToken } from './AuthMiddleware.js'

config()

const secretKey = process.env.SECRET_KEY
const secretRefreshKey = process.env.SECRET_REFRESH_KEY

export const  checkValidToken = (req, res, next) => {
    const token = req.header('Authorization') ? req.header('Authorization').replace('Bearer ', '') : null;
        if (!token) {
        return res.status(401).json({
            "status": 401,
            "error": 'You must login',
        });
    }

    try {
        const decoded = jwt.verify(token, secretKey);
        req.user = decoded;

        next();
    } catch(error) {
        if (error.name === 'TokenExpiredError') {
            const refreshToken = req.header('x-refresh-token');  // Assuming refresh token is passed in a custom header

            if (!refreshToken) {
                return res.status(401).json({
                    "status": 401,
                    "error": 'Access token expired. Please provide a valid refresh token.',
                });
            }


            try {
                const decodedRefresh = jwt.verify(refreshToken, secretRefreshKey);


                if (!decodedRefresh) {
                    return res.status(401).json({
                        "status": 401,
                        "error": 'Invalid refresh token. Please log in again.',
                    });
                }

                const userId = decodedRefresh._id

                // generate token
                const newToken = generateToken(userId)

                return res.status(200).json({
                    "status": 200,
                    "message": 'Access token expired, new token issued.',
                    "token": newToken,
                });

            } catch (refreshError) {
                return res.status(401).json({
                    "status": 401,
                    "error": 'Invalid or expired refresh token. Please log in again.',
                });
            }

        }

        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({
                "status": 401,
                "error": 'Invalid access token',
            });
        }

        return res.status(401).json({
            "status": 401,
            "error": 'Invalid or expired access token',
        });
    }
}