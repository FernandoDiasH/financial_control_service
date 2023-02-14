import { describe, it } from 'vitest';
import { makeCreditConfig } from '../../../../test/factories/CreditConfig';
import { InMemoryCreditConfigRepository } from '../../../../test/repositories/InMemoryCreditConfigRepository';
import { InMemoryCreditRepository } from '../../../../test/repositories/InMemoryCreditRepository';
import { CreateCredit } from './CreateCredit';

describe('Create Credit use case', () => {
    it('Criar um lancamento de credito ', async () => {
        const creditRepository = new InMemoryCreditRepository();
        const creditConfigRepository = new InMemoryCreditConfigRepository();

        creditConfigRepository.create(makeCreditConfig());

        const createCredit = new CreateCredit(
            creditConfigRepository,
            creditRepository
        );

        await createCredit.execute({
            user_id: 'usuario-teste',
            credit_config_id: 'teste',
            category_id: 'categoria-teste',
            data_compra: '2022-10-10',
            description: 'compra teste',
            parcelas: 3,
            value: 1400,
        });
    });
});
