import { Credit } from "@app/entities/Credit";
import { makeCategory } from "@test/factories/Category";
import { makeCreditConfig } from "@test/factories/CreditConfig";
import { makeCredit } from "@test/factories/CreditFactory";
import { InMemoryCategoryRepository } from "@test/repositories/InMemoryCategoryRepository";
import { InMemoryCreditConfigRepository } from "@test/repositories/InMemoryCreditConfigRepository";
import { InMemoryCreditRepository } from "@test/repositories/InMemoryCreditRepository";
import { parseISO } from "date-fns";
import { PayCredit } from "./PayCredit";

const creditRepository = new InMemoryCreditRepository();
const categoryRepository = new InMemoryCategoryRepository();
const creditConfigRepository = new InMemoryCreditConfigRepository();

creditConfigRepository.create(makeCreditConfig());
categoryRepository.create(makeCategory());
creditRepository.create(
    makeCredit({ dt_due: parseISO('2022-10-06') }, 'teste1')
);

creditRepository.create(
    makeCredit({ dt_due: parseISO('2022-11-10') }, 'teste2')
);
creditRepository.create(
    makeCredit({ dt_due: parseISO('2022-12-12') }, 'teste3')
);
creditRepository.create(
    makeCredit({ dt_due: parseISO('2023-01-12') }, 'teste4')
);
creditRepository.create(
    makeCredit({ dt_due: parseISO('2023-01-12') }, 'teste5')
);

const payCredit = new PayCredit(creditRepository);

describe('Pay credit', () => {
    it('Deveria alterar o status do credito', async () => {
        
        await payCredit.execute('teste1');
   
        expect(creditRepository.credits[0].credit_status.getFullYear()).toBeTruthy();
    });
});
