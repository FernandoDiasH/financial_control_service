import { Category } from "../../entities/Category";
import { prisma } from "../../prisma";
import { ICategoryRepository } from "../ICategoryRepository";


export class InMemoryCategoryRepository implements ICategoryRepository
{
    private categories:Category[] = []

    async create(data: Category): Promise<Category> {
        this.categories.push(data)
        return data 
    }
    
    async findById(id: number, user_id: number): Promise<Category> {
        const categoria = this.categories.find(categoria => categoria.props.id === id && categoria.props.user_id === user_id)

        if(!categoria){
            throw new Error('Nenhuma categoria foi encontrada')
        }
        return categoria
    }
}