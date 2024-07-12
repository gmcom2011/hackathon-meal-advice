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
import { tokenAuthorizer } from '../../middlewares'


const router = Router();


//! ############## restaurant setting #################
router.route('/v1/restuarant/get/:id').get([tokenAuthorizer], makeCallback(restaurantController.get))
router.route('/v1/restuarant/list/').post([tokenAuthorizer], makeCallback(restaurantController.list))
router.route('/v1/restuarant/create').post([tokenAuthorizer], makeCallback(restaurantController.create))
router.route('/v1/restuarant/update').post([tokenAuthorizer], makeCallback(restaurantController.update))
router.route('/v1/restuarant/disable').get([tokenAuthorizer], makeCallback(restaurantController.disable))


//! ############## restaurant setting #################
router.route('/v1/restuarant/food/get/:id').get([tokenAuthorizer], makeCallback(restaurantFoodController.get))
router.route('/v1/restuarant/food/list/').post([tokenAuthorizer], makeCallback(restaurantFoodController.list))
router.route('/v1/restuarant/food/create').post([tokenAuthorizer], makeCallback(restaurantFoodController.create))
router.route('/v1/restuarant/food/update').post([tokenAuthorizer], makeCallback(restaurantFoodController.update))
router.route('/v1/restuarant/food/disable').get([tokenAuthorizer], makeCallback(restaurantFoodController.disable))


//! ############## mealMaster setting #################
router.route('/v1/meal/Master/get/:id').get([tokenAuthorizer], makeCallback(mealMasterConntroller.get))
router.route('/v1/meal/Master/list/').post([tokenAuthorizer], makeCallback(mealMasterConntroller.list))
router.route('/v1/meal/Master/create').post([tokenAuthorizer], makeCallback(mealMasterConntroller.create))
router.route('/v1/meal/Master/update').post([tokenAuthorizer], makeCallback(mealMasterConntroller.update))


//! ############## actionCode setting #################
router.route('/v1/action/Code/get/:id').get([tokenAuthorizer], makeCallback(actionCodeController.get))
router.route('/v1/action/Code/list/').post([tokenAuthorizer], makeCallback(actionCodeController.list))
router.route('/v1/action/Code/create').post([tokenAuthorizer], makeCallback(actionCodeController.create))
router.route('/v1/action/Code/update').post([tokenAuthorizer], makeCallback(actionCodeController.update))


//! ############## actionTransaction setting #################
router.route('/v1/action/transaction/get/:id').get([tokenAuthorizer], makeCallback(actionTransactionController.get))
router.route('/v1/action/transaction/list/').post([tokenAuthorizer], makeCallback(actionTransactionController.list))
router.route('/v1/action/transaction/create').post([tokenAuthorizer], makeCallback(actionTransactionController.create))
router.route('/v1/action/transaction/update').post([tokenAuthorizer], makeCallback(actionTransactionController.update))


//! ############## foodGroupMaster setting #################
router.route('/v1/food/group/master/get/:id').get([tokenAuthorizer], makeCallback(foodGroupMasterController.get))
router.route('/v1/food/group/master/list/').post([tokenAuthorizer], makeCallback(foodGroupMasterController.list))
router.route('/v1/food/group/master/create').post([tokenAuthorizer], makeCallback(foodGroupMasterController.create))
router.route('/v1/food/group/master/update').post([tokenAuthorizer], makeCallback(foodGroupMasterController.update))


//! ############## foodAllergyMaster setting #################
router.route('/v1/food/Allergy/Master/get/:id').get([tokenAuthorizer], makeCallback(foodAllergyMasterController.get))
router.route('/v1/food/Allergy/Master/list/').post([tokenAuthorizer], makeCallback(foodAllergyMasterController.list))
router.route('/v1/food/Allergy/Master/create').post([tokenAuthorizer], makeCallback(foodAllergyMasterController.create))
router.route('/v1/food/Allergy/Master/update').post([tokenAuthorizer], makeCallback(foodAllergyMasterController.update))


//! ############## foodAllergy setting #################
router.route('/v1/food/Allergy/get/:id').get([tokenAuthorizer], makeCallback(foodAllergyController.get))
router.route('/v1/food/Allergy/list/').post([tokenAuthorizer], makeCallback(foodAllergyController.list))
router.route('/v1/food/Allergy/create').post([tokenAuthorizer], makeCallback(foodAllergyController.create))
router.route('/v1/food/Allergy/update').post([tokenAuthorizer], makeCallback(foodAllergyController.update))


//! ############## foodFavorite setting #################
router.route('/v1/food/Favorite/get/:id').get([tokenAuthorizer], makeCallback(foodFavoriteController.get))
router.route('/v1/food/Favorite/list/').post([tokenAuthorizer], makeCallback(foodFavoriteController.list))
router.route('/v1/food/Favorite/create').post([tokenAuthorizer], makeCallback(foodFavoriteController.create))
router.route('/v1/food/Favorite/update').post([tokenAuthorizer], makeCallback(foodFavoriteController.update))


//! ############## restaurantFoodAllergy setting #################
router.route('/v1/restaurant/Food/Allergy/get/:id').get([tokenAuthorizer], makeCallback(restaurantFoodAllergyController.get))
router.route('/v1/restaurant/Food/Allergy/list/').post([tokenAuthorizer], makeCallback(restaurantFoodAllergyController.list))
router.route('/v1/restaurant/Food/Allergy/create').post([tokenAuthorizer], makeCallback(restaurantFoodAllergyController.create))
router.route('/v1/restaurant/Food/Allergy/update').post([tokenAuthorizer], makeCallback(restaurantFoodAllergyController.update))

export default router