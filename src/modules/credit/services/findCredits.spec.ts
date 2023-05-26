import { Credit } from '@app/entities/Credit';
import { addHours, parseISO, setDate } from 'date-fns';
import { makeCategory } from '../../../../test/factories/Category';
import { makeCreditConfig } from '../../../../test/factories/CreditConfig';
import { makeCredit } from '../../../../test/factories/CreditFactory';
import { InMemoryCategoryRepository } from '../../../../test/repositories/InMemoryCategoryRepository';
import { InMemoryCreditConfigRepository } from '../../../../test/repositories/InMemoryCreditConfigRepository';
import { InMemoryCreditRepository } from '../../../../test/repositories/InMemoryCreditRepository';
import { FindCredits } from './findCredits';

const creditRepository = new InMemoryCreditRepository();
const categoryRepository = new InMemoryCategoryRepository();
const creditConfigRepository = new InMemoryCreditConfigRepository();

creditConfigRepository.create(makeCreditConfig());
categoryRepository.create(makeCategory());

creditRepository.create(makeCredit({ dt_due: parseISO('2022-10-06') }));
creditRepository.create(makeCredit({ dt_due: parseISO('2022-10-10') }));
creditRepository.create(makeCredit({ dt_due: parseISO('2022-10-12') }));
creditRepository.create(makeCredit({ dt_due: parseISO('2022-11-12') }));


const findCredit = new FindCredits(
    creditRepository,
    categoryRepository,
    creditConfigRepository
);


describe('Find all Credit use case', () => {
    it('Deveria trazer todos os lancamentos de credito no intervalo informado', async () => {
      
        const credits = await findCredit.execute({
            user_id: 'usuario-teste',
            start_dt: parseISO('2022-10-01'),
            end_dt: parseISO('2022-10-30'),
        });

        expect(credits.credits).toHaveLength(3);
        expect(credits.credits[0]).toBeInstanceOf(Credit)
    });

    it('Deveria trazer um array vazio se nao houver lancamentos de credito no intervalo informado', async () => {
    
        const credits = await findCredit.execute({
            user_id: 'usuario-teste',
            start_dt: parseISO('2022-12-01'),
            end_dt: parseISO('2022-12-30'),
        });

        expect(credits.credits).toHaveLength(0);
    });


    it('Caso nao informe as datas de inicio e fim, devera trazer os lancamentos do primeiro dia do mes ate o presente momento', async () =>{
        creditRepository.credits = []

        let data = setDate(new Date(), 1);
        creditRepository.create(makeCredit({ dt_due: addHours(data, 1) }));
        
        const credits = await findCredit.execute({
            user_id:'usuario-teste'
        }) 
        
        expect(credits.credits).toHaveLength(1)
    })
});
