import { faker } from  '@faker-js/faker'
import { Category, Credit, CreditConfig } from  '@prisma/client'
import { randomUUID } from 'crypto'
import { addMonths, addDays } from 'date-fns'

export function CreditFactory(qtd:number, user_id:string, categories_ids:Category[], credit_config_id:CreditConfig[]):Credit[]{
    const data:Credit[] = []

    for(let i = 0 ; i < qtd; i++ ) {
        const category = faker.helpers.arrayElement(categories_ids).id
        const creditConfig = faker.helpers.arrayElement(credit_config_id).id

        const credits = makeCredit(user_id, category, creditConfig)

        credits.map(credit => {
            data.push(credit)
        })
    }
    return data
}

function makeCredit(user_id:string, category_id:string, credit_config_id:string):Credit[]{
    const parcela = faker.datatype.number({min:1, max:12})
    const data:Credit[] = []
    const date = faker.date.past(5)
    const value = faker.datatype.number({min:100, max:3000}) / parcela

    for(let i = 0 ; i < parcela; i++ ) {
        const dt_due = addMonths(date, i)
        const credit_status = [null, addDays( dt_due, faker.datatype.number(60))]
        data.push({
            id:randomUUID(),
            user_id:user_id,
            category_id:category_id,
            credit_config_id: credit_config_id,
            description:faker.commerce.product(),
            dt_due: dt_due,
            installment_value:value,
            credit_status: faker.helpers.arrayElement(credit_status)
        })
    }

    return data
}
