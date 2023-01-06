import { Category } from "../../src/app/entities/Category";

type Override = Partial<Category>

export function makeCategory( override:Override = {}, id?:string ){
    return new Category({
        user_id:'usuario-teste',
        description:'categoria teste',
        ...override
    }, "teste")
}