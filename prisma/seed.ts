import prisma from "../src/utility/db"
import foodGroup from "./masterData/foodGroup"
import foodAllergy from "./masterData/foodAllergy"
import restaurantData from "./masterData/restaurant"
import restaurantFoodData from "./masterData/restaurantFood"
import restaurantFoodAllergyData from "./masterData/restaurantFoodAllergy"
const main = async () => {
    //?food group
    // const food_group_master = await prisma.food_group_master.createMany({ data: foodGroup })
    // console.log(food_group_master)
    //?food allergy
    // const food_allergy_master = await prisma.food_allergy_master.createMany({ data: foodAllergy })
    // console.log(food_allergy_master)
    //?restaurant
    const restaurant = await prisma.restaurant.createMany({ data: restaurantData })
    console.log(restaurant)
    //?food allergy
    const restaurantFood = await prisma.restaurant_food.createMany({ data: restaurantFoodData })
    console.log(restaurantFood)
    //?food allergy
    const restaurantFoodAllergy = await prisma.restaurant_food_allergy.createMany({ data: restaurantFoodAllergyData })
    console.log(restaurantFoodAllergy)
}


main().catch((e) => console.error(e)).finally(async () => await prisma.$disconnect())