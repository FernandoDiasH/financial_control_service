import { Category } from "@app/entities/Category";
import { CategoryAbstractRepository } from "@app/repositories/categoryAbstractRepository";
import { Injectable } from "@nestjs/common";
import { CreateCategoryPropsDTO } from "src/modules/category/dtos/categoryDTO";

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
