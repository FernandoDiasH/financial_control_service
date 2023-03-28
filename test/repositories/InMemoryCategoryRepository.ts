import { Category } from "@app/entities/Category";
import { CategoryAbstractRepository } from "@app/repositories/categoryAbstractRepository";

export class InMemoryCategoryRepository implements CategoryAbstractRepository {
    public categories: Category[] = [];

    async create(entitie: Category): Promise<Category> {
        this.categories.push(entitie);
        return entitie;
    }
    
    async save(entitie: Category): Promise<Category> {
        throw new Error("Method not implemented.");
    }

    async delete(userID: string, entititeId: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    async findById(entititeId: string): Promise<Category> {
        const categoria = this.categories.find((categoria) => categoria.id == entititeId );

        if (!categoria) {
            throw new Error('Nenhuma categoria foi encontrada');
        }
        return categoria;
    }

    async findManyByUserId(userId: string): Promise<[] | Category[]> {
        const data = this.categories.filter(
            (category) => category._user_id == userId
        );

        if (data) {
            return data;
        }

        throw new Error();
    }
}
