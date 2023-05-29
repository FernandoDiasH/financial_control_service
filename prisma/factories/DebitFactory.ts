import { Category, Debit } from "@prisma/client"
import { randomUUID } from "crypto"
import { faker } from '@faker-js/faker'

export function DebitFactory(qtd:number, user_id:string, categories:Category[]):Debit[]{
    const data:Debit[] = []

    for(let i = 0 ; i < qtd; i++ ) {
        const category = faker.helpers.arrayElement(categories)
        data.push(makeDebit(user_id, category.id))
    }

    return data
}

function makeDebit(user_id:string, category_id:number):Debit{
    return {
        id:1,
        id_user:user_id,
        id_category:category_id,
        description:faker.commerce.productName(),
        dt_purchase:faker.date.past(5),
        value:faker.datatype.number({min:1, max:10000}),
    }
}