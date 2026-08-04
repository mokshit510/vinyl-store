import express from 'express'
import {getuserID} from '../controllers/meController.js'

const meRouter = express.Router()

meRouter.post('/me', getuserID)