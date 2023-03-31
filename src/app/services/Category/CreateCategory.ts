import { Category } from "@app/entities/Category";
import { CategoryAbstractRepository } from "@app/repositories/categoryAbstractRepository";
import { CreateCategoryPropsDTO } from "@infra/http/DTOs/categoryDTO";
import { Injectable } from "@nestjs/common";

type CreateCategoryResponse = Category;

@Injectable()
export class CreateCategory {
    constructor(private categoryRepository: CategoryAbstractRepository) { }

    async execute(request: CreateCategoryPropsDTO): Promise<CreateCategoryResponse> {

        const category = new Category({
            user_id: request.user_id,
            description: request.description,
            type: request.type
        });

        this.categoryRepository.create(category);
        return category;
    }
}
