import { Category } from "../../src/app/entities/Category";
import { ICategoryRepository } from "../../src/app/repositories/ICategoryRepository";


export class InMemoryCategoryRepository implements ICategoryRepository
{
    public categories:Category[] = []

    async create(data: Category): Promise<void> {
        this.categories.push(data) 
    }
    
    async findById(id: string, user_id: string): Promise<Category> {
        const categoria = this.categories.find(categoria => categoria.id == id && categoria._user_id === user_id)

        if(!categoria){
            throw new Error('Nenhuma categoria foi encontrada')
        }
        return categoria
    }
}