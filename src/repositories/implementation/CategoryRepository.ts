import { Category } from "../../entities/Category";
import { prisma } from "../../prisma";
import { ICategoryRepository } from "../ICategoryRepository";


export class CategoryRepository implements ICategoryRepository
{
    async create(category: Category): Promise<Category> {
       
        return await prisma.category.create({
            data:{
                id: category.props.id,
                user_id:category.props.user_id,
                description:category.props.description
            }
        })
    }
    
    async findById(id: number, user_id: number): Promise<Category> {
        const category = await prisma.category.findFirst({
            where:{
                id:id,
                user_id:user_id
            }
        })

        if(!category){
            throw new Error('Nao foi encontrado nenhum registro')
        }

        return category
    }

}