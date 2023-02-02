import { CategoryDTO } from '../../../infra/DTOs/CategoryDTO';
import { Category } from '../../entities/Category';
import { ICategoryRepository } from '../../repositories/ICategoryRepository';

type CreateCategoryResponse = Category;

export class CreateCategory {
    constructor(private categoryRepository: ICategoryRepository) {}

    async execute(request: CategoryDTO): Promise<CreateCategoryResponse> {
        const category = new Category({
            user_id: request.user_id,
            description: request.description,
        });

        this.categoryRepository.create(category);
        return category;
    }
}
