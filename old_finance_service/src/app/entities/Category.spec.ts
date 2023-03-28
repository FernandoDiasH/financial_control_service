import { expect, it, describe } from 'vitest';
import { Category } from './Category';

describe('Category', () => {
    it('deveria poder criar uma categoria', () => {
        const categoria = new Category({
            user_id: 'user_id_teste',
            description: 'descricao teste',
        });
        expect(categoria).toBeInstanceOf(Category);
        expect(categoria.id).toBeTypeOf('string');
    });
});
