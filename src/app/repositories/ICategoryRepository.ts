import { Category } from "../entities/Category";


export interface ICategoryRepository{
    create(data:Category):Promise<void>
    findById(id:string, user_id:string ):Promise<Category>
}