import { Category } from "../../entities/Category";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";
import { CreateCategoryDTO } from "./CreateCategoryDTO";



export class CreateCategoryUseCase {

    constructor(
        private categoryRepository:ICategoryRepository
    ){}
    
    async execute (data:CreateCategoryDTO){  
        
        const category = new Category({
            id:data.id,
            user_id:data.user_id,
            description:data.descripiton
        })

        await this.categoryRepository.create(category)
    }
}