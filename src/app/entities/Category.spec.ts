import { Category } from "./Category";

describe('Entitie Category', () => {
    it('deveria poder criar uma categoria', () => {
        const categoria = new Category({
            user_id: 'user_id_teste',
            description: 'descricao teste',
            type:"Entrada"
        });
        expect(categoria).toBeInstanceOf(Category);
        expect(typeof categoria.id).toBe('string');
    });
});
