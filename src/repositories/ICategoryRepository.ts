import { Category } from "../entities/Category";


export interface ICategoryRepository{
    create(category:Category):Promise<void>
    findById(id:number, user_id:number ):Promise<Category>
}