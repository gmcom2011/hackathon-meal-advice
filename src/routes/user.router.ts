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
import userUseCase from '../useCases/user/user.useCase';
import userController from '../controllers/user/user.Controller';
import userSettingController from '../controllers/user/userSetting.Controller';


const router = Router();


//! ############## user data #################
router.route('/v1/user/get/:id').get([tokenAuthorizer], makeCallback(restaurantController.get))
router.route('/v1/user/register').post(makeCallback(userController.register))
router.route('/v1/user/food/favorite/create').post([tokenAuthorizer], makeCallback(userSettingController.createUserFoodData))
router.route('/v1/user/update').post([tokenAuthorizer], makeCallback(restaurantController.update))
router.route('/v1/user/disable').get([tokenAuthorizer], makeCallback(restaurantController.disable))

export default router