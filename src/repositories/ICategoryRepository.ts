import { Category } from "../entities/Category";


export interface ICategoryRepository{
    create(data:Category):Promise<Category>
    findById(id:number, user_id:number ):Promise<Category>
}