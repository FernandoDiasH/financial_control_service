import { parseISO } from 'date-fns';
import { makeCategory } from '../../../../test/factories/Category';
import { makeCreditConfig } from '../../../../test/factories/CreditConfig';
import { makeCredit } from '../../../../test/factories/CreditFactory';
import { InMemoryCategoryRepository } from '../../../../test/repositories/InMemoryCategoryRepository';
import { InMemoryCreditConfigRepository } from '../../../../test/repositories/InMemoryCreditConfigRepository';
import { InMemoryCreditRepository } from '../../../../test/repositories/InMemoryCreditRepository';
import { FindDistincstMonts } from './findDistinctsMouth';

const creditRepository = new InMemoryCreditRepository();
        const categoryRepository = new InMemoryCategoryRepository();
        const creditConfigRepository = new InMemoryCreditConfigRepository();

        creditConfigRepository.create(makeCreditConfig());
        categoryRepository.create(makeCategory());
        creditRepository.save(makeCredit({ dt_due: parseISO('2022-10-06') }));
        creditRepository.save(makeCredit({ dt_due: parseISO('2022-11-10') }));
        creditRepository.save(makeCredit({ dt_due: parseISO('2022-12-12') }));
        creditRepository.save(makeCredit({ dt_due: parseISO('2023-01-12') }));
        creditRepository.save(makeCredit({ dt_due: parseISO('2023-01-12') }));

        const findMonths = new FindDistincstMonts(creditRepository);

describe('Find all distincts dates', () => {
    it('Deveria trazer todas os meses de credito lancado', async () => {
        
        const months = await findMonths.execute('usuario-teste');

        expect(months).toBeTruthy();
    });
});
