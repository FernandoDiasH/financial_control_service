import { Category } from "@app/entities/Category";
import { CategoryAbstractRepository } from "@app/repositories/categoryAbstractRepository";
import { CreateCategoryDTO } from "@infra/http/DTOs/createCategoryDTO";
import { Injectable } from "@nestjs/common";

type CreateCategoryResponse = Category;

@Injectable()
export class CreateCategory {
    constructor(private categoryRepository: CategoryAbstractRepository) {}

    async execute(request: CreateCategoryDTO): Promise<CreateCategoryResponse> {
        
        const category = new Category({
            user_id: request.user_id,
            description: request.description,
        });
        
        this.categoryRepository.create(category);
        return category;
    }
}
