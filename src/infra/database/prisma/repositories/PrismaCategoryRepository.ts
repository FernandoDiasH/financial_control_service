import { Category } from '@app/entities/Category';
import { ICategoryRepository } from '../../../../app/repositories/ICategoryRepository';
import { PrismaCategoryMapper } from '../mappers/prisma-category-mapper';
import { prisma } from '../prisma';

export class PrismaCategoryRepository implements ICategoryRepository {
    async create(categoty: Category): Promise<void> {
        const raw = PrismaCategoryMapper.toPrisma(categoty);

        await prisma.category.create({
            data: raw,
        });
    }

    async findById(id: string, user_id: string): Promise<Category> {
        const raw = await prisma.category.findFirstOrThrow({
            where: {
                id: id,
                user_id: user_id,
            },
        });

        return PrismaCategoryMapper.toDomain(raw);
    }

    async findAllByUserID(user_id: string): Promise<Category[]> {
        const raw = await prisma.category.findMany({
            where: {
                user_id: user_id,
            },
        });

        return raw.map((category) => PrismaCategoryMapper.toDomain(category));
    }
}
