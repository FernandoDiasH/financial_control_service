import { Category } from '../../../../app/entities/Category';
import { Category as PrismaCategory } from '@prisma/client';

export class PrismaCategoryMapper {
    static toPrisma(category: Category) {
        return {
            id: category.id,
            user_id: category._user_id,
            description: category._descripiton,
            type_catgory:category._type
        };
    }

    static toDomain(category: PrismaCategory) {
        return new Category(
            {
                user_id: category.user_id,
                description: category.description,
                type:category.type_catgory
            },
            category.id
        );
    }
}
