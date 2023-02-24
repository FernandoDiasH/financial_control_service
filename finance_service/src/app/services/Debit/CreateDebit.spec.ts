import { makeCategory } from '../../../../test/factories/Category';
import { InMemoryDebitRepository } from '../../../../test/repositories/InMemoryDebitRepository';
import { CreateDebit } from './CreateDebit';

describe('Create debit', () => {
    it('deveria poder criar um lancamento de debito', async () => {
        const debitReposytory = new InMemoryDebitRepository();
        const createDebit = new CreateDebit(debitReposytory);

        const category = makeCategory();

        const debit = await createDebit.execute({
            user_id: 'usuario teste',
            category_id: category.id,
            debit_type: 'saida',
            description: 'compra teste',
            dt_purchase: '2022-22-10',
            value: 1223,
        });

        expect(debitReposytory.debits).toHaveLength(1);
        expect(debitReposytory.debits[0]).toEqual(debit);
    });
});
