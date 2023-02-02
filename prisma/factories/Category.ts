import { Category } from '@prisma/client'
import { randomUUID } from "crypto"

const categories = ["Remuneração", "Conta fixa","Gastos extras", "Mercado", "Comida", "Moto"]


export function makeCategories(user_id:string){
    return categories.map(category =>{
        return makeCategory(user_id, category)
    })
}


function makeCategory(user_id:string, categoria:string):Category{
    return {
        id:randomUUID(),
        user_id:user_id,
        description:categoria
    }
}

