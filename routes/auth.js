import express from 'express'
import {signin,login,logout } from '../controllers/authController'

export const authRouter = express.Router()

authRouter.post('/register', signin)
authRouter.post('/login', login)
authRouter.get('/logout', logout)