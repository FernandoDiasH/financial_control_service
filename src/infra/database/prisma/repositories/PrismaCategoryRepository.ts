import { Category } from "../../../../app/entities/Category";
import { ICategoryRepository } from "../../../../app/repositories/ICategoryRepository";
import { prisma } from "../prisma";


export class PrismaCategoryRepository implements ICategoryRepository{
    async create(data: Category): Promise<void> {
        await prisma.category.create({
            data:{
                id:data._id,
                user_id:data._user_id,
                description:data._descripiton
            }
        }) 
    }

    findById(id: string, user_id: string): Promise<Category> {
        throw new Error("Method not implemented.");
    }

}