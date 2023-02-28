import { InMemoryCategoryRepository } from "@test/repositories/InMemoryCategoryRepository";
import { randomUUID } from "crypto";
import { CreateCategory } from "./CreateCategory";

describe('Create Category use case', () => {
    it('criar uma categoria espero registre', async () => {
        const inMemoryCategoryRepository = new InMemoryCategoryRepository();
        const createCategoryUseCase = new CreateCategory(
            inMemoryCategoryRepository
        );

        const categoria = await createCategoryUseCase.execute({
            user_id: randomUUID(),
            description: 'Categoria teste',
            type:"Saida"
        });

        expect(inMemoryCategoryRepository.categories).toHaveLength(1);
        expect(inMemoryCategoryRepository.categories[0]).toEqual(categoria);
    });
});
