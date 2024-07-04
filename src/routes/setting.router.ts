import { Router } from 'express'

// import Controller

import restaurantController from '../controllers/settings/restaurant.Controller'
import restaurantFoodController from '../controllers/settings/restaurantFood.Controller';

// import util
import makeCallback from './make-callback'


const router = Router();


//! ############## restaurant setting #################
router.route('v1/restuarant/get/:id').get(makeCallback(restaurantController.get))
router.route('v1/restuarant/list/').get(makeCallback(restaurantController.list))
router.route('v1/restuarant/create').get(makeCallback(restaurantController.create))
router.route('v1/restuarant/update').get(makeCallback(restaurantController.update))
router.route('v1/restuarant/disable').get(makeCallback(restaurantController.disable))


//! ############## restaurant setting #################
router.route('v1/restuarant/food/get/:id').get(makeCallback(restaurantFoodController.get))
router.route('v1/restuarant/food/list/').get(makeCallback(restaurantFoodController.list))
router.route('v1/restuarant/food/create').get(makeCallback(restaurantFoodController.create))
router.route('v1/restuarant/food/update').get(makeCallback(restaurantFoodController.update))
router.route('v1/restuarant/food/disable').get(makeCallback(restaurantFoodController.disable))