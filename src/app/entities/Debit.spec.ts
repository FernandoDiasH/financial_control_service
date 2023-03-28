import { describe, expect, it } from 'vitest';
import { Debit } from './Debit';

describe('Debit', () => {
    it('deveria pode criar uma instacia de Debit', () => {
        const debit = new Debit({
            user_id: 'usuario teste',
            category_id: 'categoria teste',
            debit_type: 'saida',
            description: 'compra teste',
            dt_purchase: '2022-22-10',
            value: 1223,
        });

        expect(debit).toBeInstanceOf(Debit);
    });
});
