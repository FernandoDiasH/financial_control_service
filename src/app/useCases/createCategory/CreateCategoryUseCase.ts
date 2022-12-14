import { Category } from "../../entities/Category";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";

interface CreateCategoryRequest {
    id?:string
    user_id:string
    description:string
}

type CreateCategoryResponse = Category

export class CreateCategoryUseCase {

    constructor(
        private categoryRepository:ICategoryRepository
    ){}

    async execute(request: CreateCategoryRequest):Promise<CreateCategoryResponse> {
        const category =  new Category({
            id:request.id,
            user_id:request.user_id,
            description:request.description
        })

        this.categoryRepository.create(category)
        return category
    }
}