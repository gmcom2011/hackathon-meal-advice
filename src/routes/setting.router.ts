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
import restaurantFoodAllergyController from '../controllers/settings/restaurantFoodAllergy.Controller';


const router = Router();


//! ############## restaurant setting #################
router.route('/v1/restuarant/get/:id').get(makeCallback(restaurantController.get))
router.route('/v1/restuarant/list/').post(makeCallback(restaurantController.list))
router.route('/v1/restuarant/create').post(makeCallback(restaurantController.create))
router.route('/v1/restuarant/update').post(makeCallback(restaurantController.update))
router.route('/v1/restuarant/disable').get(makeCallback(restaurantController.disable))


//! ############## restaurant setting #################
router.route('/v1/restuarant/food/get/:id').get(makeCallback(restaurantFoodController.get))
router.route('/v1/restuarant/food/list/').post(makeCallback(restaurantFoodController.list))
router.route('/v1/restuarant/food/create').post(makeCallback(restaurantFoodController.create))
router.route('/v1/restuarant/food/update').post(makeCallback(restaurantFoodController.update))
router.route('/v1/restuarant/food/disable').get(makeCallback(restaurantFoodController.disable))


//! ############## mealMaster setting #################
router.route('/v1/meal/Master/get/:id').get(makeCallback(mealMasterConntroller.get))
router.route('/v1/meal/Master/list/').post(makeCallback(mealMasterConntroller.list))
router.route('/v1/meal/Master/create').post(makeCallback(mealMasterConntroller.create))
router.route('/v1/meal/Master/update').post(makeCallback(mealMasterConntroller.update))


//! ############## actionCode setting #################
router.route('/v1/action/Code/get/:id').get(makeCallback(actionCodeController.get))
router.route('/v1/action/Code/list/').post(makeCallback(actionCodeController.list))
router.route('/v1/action/Code/create').post(makeCallback(actionCodeController.create))
router.route('/v1/action/Code/update').post(makeCallback(actionCodeController.update))


//! ############## actionTransaction setting #################
router.route('/v1/action/transaction/get/:id').get(makeCallback(actionTransactionController.get))
router.route('/v1/action/transaction/list/').post(makeCallback(actionTransactionController.list))
router.route('/v1/action/transaction/create').post(makeCallback(actionTransactionController.create))
router.route('/v1/action/transaction/update').post(makeCallback(actionTransactionController.update))


//! ############## foodGroupMaster setting #################
router.route('/v1/food/group/master/get/:id').get(makeCallback(foodGroupMasterController.get))
router.route('/v1/food/group/master/list/').post(makeCallback(foodGroupMasterController.list))
router.route('/v1/food/group/master/create').post(makeCallback(foodGroupMasterController.create))
router.route('/v1/food/group/master/update').post(makeCallback(foodGroupMasterController.update))


//! ############## foodAllergyMaster setting #################
router.route('/v1/food/Allergy/Master/get/:id').get(makeCallback(foodAllergyMasterController.get))
router.route('/v1/food/Allergy/Master/list/').post(makeCallback(foodAllergyMasterController.list))
router.route('/v1/food/Allergy/Master/create').post(makeCallback(foodAllergyMasterController.create))
router.route('/v1/food/Allergy/Master/update').post(makeCallback(foodAllergyMasterController.update))


//! ############## foodAllergy setting #################
router.route('/v1/food/Allergy/get/:id').get(makeCallback(foodAllergyController.get))
router.route('/v1/food/Allergy/list/').post(makeCallback(foodAllergyController.list))
router.route('/v1/food/Allergy/create').post(makeCallback(foodAllergyController.create))
router.route('/v1/food/Allergy/update').post(makeCallback(foodAllergyController.update))


//! ############## foodFavorite setting #################
router.route('/v1/food/Favorite/get/:id').get(makeCallback(foodFavoriteController.get))
router.route('/v1/food/Favorite/list/').post(makeCallback(foodFavoriteController.list))
router.route('/v1/food/Favorite/create').post(makeCallback(foodFavoriteController.create))
router.route('/v1/food/Favorite/update').post(makeCallback(foodFavoriteController.update))


//! ############## restaurantFoodAllergy setting #################
router.route('/v1/restaurant/Food/Allergy/get/:id').get(makeCallback(restaurantFoodAllergyController.get))
router.route('/v1/restaurant/Food/Allergy/list/').post(makeCallback(restaurantFoodAllergyController.list))
router.route('/v1/restaurant/Food/Allergy/create').post(makeCallback(restaurantFoodAllergyController.create))
router.route('/v1/restaurant/Food/Allergy/update').post(makeCallback(restaurantFoodAllergyController.update))

export default router