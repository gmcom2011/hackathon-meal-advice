import prisma from "../src/utility/db"
import foodGroup from "./masterData/foodGroup"
import foodAllergy from "./masterData/foodAllergy"
const main = async () => {
    //?food group
    // const food_group_master = await prisma.food_group_master.createMany({ data: foodGroup })
    // console.log(food_group_master)
    //?food allergy
    const food_allergy_master = await prisma.food_allergy_master.createMany({ data: foodAllergy })
    console.log(food_allergy_master)

}


main().catch((e) => console.error(e)).finally(async () => await prisma.$disconnect())