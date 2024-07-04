import { Router } from 'express'

// import Controller

import restaurantController from '../controllers/settings/restaurant.Controller'

// import util
import makeCallback from './make-callback'


const router = Router();

router.route('v1/restuarant/get/:id').get(makeCallback(restaurantController.get))
router.route('v1/restuarant/list/').get(makeCallback(restaurantController.list))
router.route('v1/restuarant/create').get(makeCallback(restaurantController.create))
router.route('v1/restuarant/update').get(makeCallback(restaurantController.update))
router.route('v1/restuarant/disable').get(makeCallback(restaurantController.disable))