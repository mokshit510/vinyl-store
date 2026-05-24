import express from 'express'
import {getuserID} from '../controllers/meController'

const meRouter = express.Router()

meRouter.post('/me', getuserID)