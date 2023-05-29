import { CreditConfig } from "@prisma/client"
import { randomUUID } from "crypto"
import { faker } from '@faker-js/faker'

export function CreditConfigFactory(qtd:number, user_id:string):CreditConfig[]{
    const data:CreditConfig[] = []

    for(let i = 0 ; i < qtd; i++ ) {
        data.push(makeCreditConfig(user_id))
    }

    return data
}

function makeCreditConfig(user_id:string):CreditConfig{
    return {
        id:1,
        id_user: user_id,
        day_credit_closing: faker.datatype.number({min:1,  max:31}),
        day_due: faker.datatype.number({min:1,  max:31}),
        description: faker.finance.accountName(),
        limit_credit: Number(faker.finance.amount(1000, 6000, 0))
    }
}