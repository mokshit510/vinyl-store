import express from 'express'
import {addToCart,getCartCount,getAll,deleteAll,deleteItem} from '../controllers/cartController'
import { requireAuth } from '../middleware/requireAuth'

export const cartRouter = express.Router()

cartRouter.post('/add', requireAuth,addToCart) 
cartRouter.get('/cart-count', requireAuth,getCartCount)
cartRouter.get('/',requireAuth, getAll) 
cartRouter.delete('/all',requireAuth, deleteAll) 
cartRouter.delete('/:itemId', requireAuth,deleteItem) 