import { Router } from 'express'

// import Controller

import restaurantController from '../controllers/settings/restaurant.Controller'

// import util
import makeCallback from './make-callback'


const router = Router();

router.route('v1/restuarant/get/:id').get(makeCallback(restaurantController.get))