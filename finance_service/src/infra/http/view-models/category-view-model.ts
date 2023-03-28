import { Category } from '../../../app/entities/Category';

export class CategoryViewModel {
    static toHTTP(category: Category) {
        return {
            id: category.id,
            user_id: category.user_id,
            description: category.description,
        };
    }
}
