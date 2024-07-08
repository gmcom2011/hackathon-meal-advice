import { Router } from 'express'

// import Controller

import restaurantController from '../controllers/settings/restaurant.Controller'
import restaurantFoodController from '../controllers/settings/restaurantFood.Controller';
import mealMasterController from '../controllers/settings/mealMaster.Controller';

// import util
import makeCallback from './make-callback'
import mealMasterConntroller from '../controllers/settings/mealMaster.Conntroller';
import actionCodeController from '../controllers/settings/actionCode.Controller';
import actionTransactionController from '../controllers/settings/actionTransaction.Controller';
import foodGroupMasterController from '../controllers/settings/foodGroupMaster.Controller';
import foodAllergyMasterController from '../controllers/settings/foodAllergyMaster.Controller';
import foodAllergyController from '../controllers/settings/foodAllergy.Controller';
import foodFavoriteController from '../controllers/settings/foodFavorite.Controller';


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


//! ############## mealMaster setting #################
router.route('v1/meal/Master/get/:id').get(makeCallback(mealMasterConntroller.get))
router.route('v1/meal/Master/list/').get(makeCallback(mealMasterConntroller.list))
router.route('v1/meal/Master/create').get(makeCallback(mealMasterConntroller.create))
router.route('v1/meal/Master/update').get(makeCallback(mealMasterConntroller.update))


//! ############## actionCode setting #################
router.route('v1/action/Code/get/:id').get(makeCallback(actionCodeController.get))
router.route('v1/action/Code/list/').get(makeCallback(actionCodeController.list))
router.route('v1/action/Code/create').get(makeCallback(actionCodeController.create))
router.route('v1/action/Code/update').get(makeCallback(actionCodeController.update))


//! ############## actionTransaction setting #################
router.route('v1/action/Transaction/get/:id').get(makeCallback(actionTransactionController.get))
router.route('v1/action/Transaction/list/').get(makeCallback(actionTransactionController.list))
router.route('v1/action/Transaction/create').get(makeCallback(actionTransactionController.create))
router.route('v1/action/Transaction/update').get(makeCallback(actionTransactionController.update))


//! ############## foodGroupMaster setting #################
router.route('v1/food/Group/Master/get/:id').get(makeCallback(foodGroupMasterController.get))
router.route('v1/food/Group/Master/list/').get(makeCallback(foodGroupMasterController.list))
router.route('v1/food/Group/Master/create').get(makeCallback(foodGroupMasterController.create))
router.route('v1/food/Group/Master/update').get(makeCallback(foodGroupMasterController.update))


//! ############## foodAllergyMaster setting #################
router.route('v1/food/Allergy/Master/get/:id').get(makeCallback(foodAllergyMasterController.get))
router.route('v1/food/Allergy/Master/list/').get(makeCallback(foodAllergyMasterController.list))
router.route('v1/food/Allergy/Master/create').get(makeCallback(foodAllergyMasterController.create))
router.route('v1/food/Allergy/Master/update').get(makeCallback(foodAllergyMasterController.update))


//! ############## foodAllergy setting #################
router.route('v1/food/Allergy/get/:id').get(makeCallback(foodAllergyController.get))
router.route('v1/food/Allergy/list/').get(makeCallback(foodAllergyController.list))
router.route('v1/food/Allergy/create').get(makeCallback(foodAllergyController.create))
router.route('v1/food/Allergy/update').get(makeCallback(foodAllergyController.update))


//! ############## foodFavorite setting #################
router.route('v1/food/Favorite/get/:id').get(makeCallback(foodFavoriteController.get))
router.route('v1/food/Favorite/list/').get(makeCallback(foodFavoriteController.list))
router.route('v1/food/Favorite/create').get(makeCallback(foodFavoriteController.create))
router.route('v1/food/Favorite/update').get(makeCallback(foodFavoriteController.update))
