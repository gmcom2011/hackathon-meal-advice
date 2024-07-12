import { Router } from 'express'

// import Controller

import restaurantController from '../controllers/settings/restaurant.Controller'

// import util
import makeCallback from './make-callback'
import { tokenAuthorizer } from '../../middlewares'
import foodTransaction from '../controllers/transaction/foodTransaction';


const router = Router();


//! ############## user data #################
router.route('/v1/trasnaction/generate/food/option').post([tokenAuthorizer], makeCallback(foodTransaction.getFoodOption))
router.route('/v1/transaction/create').post([tokenAuthorizer], makeCallback(foodTransaction.createTransaction))

export default router