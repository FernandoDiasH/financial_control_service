import { Category } from "../../../../app/entities/Category";
import { ICategoryRepository } from "../../../../app/repositories/ICategoryRepository";
import { PrismaCategoryMapper } from "../mappers/prisma-category-mapper";
import { prisma } from "../prisma";


export class PrismaCategoryRepository implements ICategoryRepository{
    async create(categoty: Category): Promise<void> {
        const raw = PrismaCategoryMapper.toPrisma(categoty)

        await prisma.category.create({
            data: raw
        }) 
    }

    findById(id: string, user_id: string): Promise<Category> {
        throw new Error("Method not implemented.");
    }

}