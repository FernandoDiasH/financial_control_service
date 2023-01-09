import { PrismaCategoryRepository } from '../../../infra/database/prisma/repositories/PrismaCategoryRepository';
import { PrismaCreditConfigRepository } from '../../../infra/database/prisma/repositories/PrismaCreditConfigRepository';
import { PrismaCreditRepository } from '../../../infra/database/prisma/repositories/PrismaCreditRepository';
import { CreateCredit } from './CreateCredit';
import { FindCredits } from './findCredits';
import { FindDistincstMonts } from './findDistinctsMouth';
import { PayCredit } from './PayCredit';

const creditRepository = new PrismaCreditRepository();
const creditConfigRepository = new PrismaCreditConfigRepository();
const categoryRepository = new PrismaCategoryRepository();

const createCredit = new CreateCredit(creditConfigRepository, creditRepository);
const findcredits = new FindCredits(
    creditRepository,
    categoryRepository,
    creditConfigRepository
);
const findDistinctMounts = new FindDistincstMonts(creditRepository);
const payCredt = new PayCredit(creditRepository);

export { createCredit, findcredits, findDistinctMounts, payCredt };
