import { Category, TypeCategory } from '@prisma/client'
import { randomUUID } from "crypto"

interface category {
    description:string,
    type: TypeCategory
}

const categories:category[] = [
    {
        description:"Remuneração",
        type:'Entrada'
    },
    {
        description:"Conta fixa",
        type:'Saida'
    },
    {
        description:"Gastos extras",
        type:'Saida'
    },
    {
        description:"Mercado",
        type:'Saida'
    },
    {
        description:"Comida",
        type:'Saida'
    },
    {
        description:"Moto",
        type:'Saida'
    },
]


export function makeCategories(user_id:string){
    return categories.map(category =>{
        return makeCategory(user_id, category)
    })
}


function makeCategory(user_id:string, categoria:category):Category{
    return {
        id: 1,
        id_user:user_id,
        description:categoria.description,
        type_category:categoria.type
    }
}

