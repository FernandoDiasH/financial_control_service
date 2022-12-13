import { Category } from "../../entities/Category";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";

interface CreateCategoryRequest {
    id?:number
    user_id:number
    description:string
}

type CreateCategoryResponse = Category

export class CreateCategoryUseCase {

    constructor(
        private categoryRepository:ICategoryRepository
    ){}
    
    async execute (data:CreateCategoryRequest): Promise<CreateCategoryResponse>   
        
        const category = new Category({
            id:
        })

        await this.categoryRepository.create(category)
    }
}