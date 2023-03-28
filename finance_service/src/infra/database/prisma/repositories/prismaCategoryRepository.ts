import { Injectable } from "@nestjs/common";
import { Category } from "src/app/entities/Category";
import { CategoryAbstractRepository } from "src/app/repositories/categoryAbstractRepository";
import { PrismaCategoryMapper } from "../mappers/prismaCategoryMapper";
import { Repository } from "./repository";

@Injectable()
export class PrismaCategoryRepository extends Repository implements CategoryAbstractRepository {

    async create(entitie: Category): Promise<Category> {

        const raw = PrismaCategoryMapper.toPrisma(entitie);

        await this.prisma.category.create({
            data: raw,
        });

        return entitie
    }

    async save(entitie: Category): Promise<Category> {
        throw new Error("Method not implemented.");
    }

    async delete(userID: string, entititeId: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    async findById(entititeId: string): Promise<Category> {
        const raw = await this.prisma.category.findFirstOrThrow({
            where: {
                id: entititeId
            },
        });

        return PrismaCategoryMapper.toDomain(raw);
    }

    async findManyByUserId(userId: string): Promise<[] | Category[]> {
        const raw = await this.prisma.category.findMany({
            where: {
                user_id: userId,
            },
        });

        return raw.map((category) => PrismaCategoryMapper.toDomain(category));
    }
}
