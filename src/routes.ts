import { CategoryController } from './infra/http/controllers/CategoryController';
import { CreditConfigController } from './infra/http/controllers/CreditConfigController';
import { CreditController } from './infra/http/controllers/CreditController';
import { DebitController } from './infra/http/controllers/DebitController';
import { Request, Response, Router } from 'express';
import { resolver } from './utils/errors/ErrorResolver';

const routes = Router();

routes.get('/', resolver(async (req:Request, res:Response) => {
    return res.send('Hello word');
}));

routes.post('/category', resolver(CategoryController.create));
routes.post('/credit/config', resolver(CreditConfigController.create));
routes.post('/credit', resolver(CreditController.create));
routes.post('/debit', resolver(DebitController.create));

routes.post('/credit/pay', resolver(CreditController.payCredit));

routes.post('/find/credits', resolver(CreditController.findCredits));
routes.post('/find/months', resolver(CreditController.findDistinctMounts));
routes.post('/find/debits', resolver(DebitController.getAllDebtis))

export { routes };
