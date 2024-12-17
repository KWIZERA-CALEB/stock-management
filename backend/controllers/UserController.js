import UserModel from "../models/UserModel.js";
import _ from 'lodash'
import { validateAddingNewManager } from "../validators/validateuser.js";
import { config } from 'dotenv'
import bcrypt from 'bcryptjs'
import { generateToken, generateRefreshToken } from "../middlewares/AuthMiddleware.js";

config()

export const addNewManager = async (req, res) => {
    try {
        const managerInfo = {
            fullName: req.body.fullName,
            email: req.body.email,
            password: req.body.password,
        }

        const validateUserInput = await validateAddingNewManager(_.pick(managerInfo, ["fullName", "email", "password"]))
        if (validateUserInput.error) {
            return res.status(400).json({
                "status": 400,
                "error": validateUserInput.error.details[0].message
                    .replace(/"([^"]+)"/g, '$1')
                    .charAt(0).toUpperCase() + validateUserInput.error.details[0].message.slice(1)
            });
            
        }

        bcrypt.hash(managerInfo.password, 10, (error, hashedPassword) => {
            if (error) {
                return res.json({
                    "status": 400,
                    "error": "Try again"
                })
            }

            const newManagerInfo = new UserModel({
                fullName: req.body.fullName,
                email: req.body.email,
                password: hashedPassword,
            })
            
            const createNewManager = newManagerInfo.save()
    
            if (createNewManager) {
                return res.status(201).json({
                    "status": 201,
                    "message": "Manager Added"
                })
            } else {
                return res.status(400).json({
                    "status": 400,
                    "error": "Failed to add new Manager"
                })
            }
        })

    } catch(error) {
        res.status(500).json({
            "status": 500,
            "error": "An error occurred"
        })
        throw error
    }
}

export const loginUser = async (req, res) => {
    try {
        const loginInfo = {
            email: req.body.email,
            password: req.body.password
        }

        const findUserByEmail = await UserModel.findOne({ email: loginInfo.email })
        if (!findUserByEmail) {
            return res.status(400).json({
                "status": 400,
                "error": "You are not allowed"
            })
        } else {
            bcrypt.compare(loginInfo.password, findUserByEmail.password, (error, isMatch) => {
                if (!isMatch) {
                    return res.json({
                        "status": 400,
                        "error": "Incorrect Password"
                    })
                }

                if (isMatch) {
                    const token = generateToken(findUserByEmail._id.toString())
                    const refreshToken = generateRefreshToken(findUserByEmail._id.toString())

                    return res.status(200).json({
                        "status": 200,
                        "user": findUserByEmail.fullName,
                        "token": token,
                        "refreshToken": refreshToken,
                        "message": "Logged In Successfully"
                    })
                }

            })
        }
    } catch(error) {
        res.status(500).json({
            "status": 500,
            "error": "An error occurred"
        })
        throw error
    }
}

