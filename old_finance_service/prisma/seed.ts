import { PrismaClient } from "@prisma/client"
import { makeCategories } from "./factories/Category"
import { CreditConfigFactory } from "./factories/CreditConfigFactory"
import { CreditFactory } from "./factories/CreditFactory"
import { DebitFactory } from "./factories/DebitFactory"

const prisma = new PrismaClient()

const user_id = "85535c53-d2f4-4fe7-8ac9-6cb2b0a722c0"

async function main(){

    let categories = await prisma.category.findMany()
    let creditConfigs = await prisma.creditConfig.findMany()

    if(categories.length < 1){
         categories = makeCategories(user_id)

         console.log("create category");
         await prisma.category.createMany({
             data:categories
         })
    }

    if(creditConfigs.length < 1){
         creditConfigs = CreditConfigFactory(2, user_id)

         console.log("create Credit Config");
         await prisma.creditConfig.createMany({
             data:creditConfigs
         })
    }

    const credits = CreditFactory(4, user_id, categories, creditConfigs)
    const debits = DebitFactory(10, user_id, categories)
    
    console.log("create Credit");
    await prisma.credit.createMany({
        data:credits
    })   

    console.log("Create Debit")
    await prisma.debit.createMany({
        data:debits
    })
}


main()
.then(async () => {
    await prisma.$disconnect()
})
.catch(async (e) => {
    console.log('error')

    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})