import prisma from "../../utility/db"
import { InternalServerError } from 'http-errors'
export default Object.freeze({

    foodTransactionByPeriod: async (params: { start: Date, end: Date }) => {

    },
    foodTransactionGroupByUserId: async (params: { user_id: string }) => {
        try {
            const transactions = await prisma.food_transaction.groupBy({
                where: params,
                by: ['food_group_id'],
                _sum: {
                    price: true,
                },
                orderBy: {
                    _sum: {
                        price: 'asc',
                    },
                },
            });
            return transactions
        } catch (error) {
            console.log(error)
            throw new InternalServerError("INTERNAL_SERVER_ERROR")
        }
    }
})