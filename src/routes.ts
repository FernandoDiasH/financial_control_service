import { CategoryController } from './infra/http/controllers/CategoryController';
import { CreditConfigController } from './infra/http/controllers/CreditConfigController';
import { CreditController } from './infra/http/controllers/CreditController';
import { DebitController } from './infra/http/controllers/DebitController';
import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {
    return res.send('Hello word');
});

routes.post('/category', CategoryController.create);
routes.post('/credit/config', CreditConfigController.create);
routes.post('/credit', CreditController.create);
routes.post('/debit', DebitController.create);

routes.post('/credit/pay', CreditController.payCredit);

routes.post('/find/credits', CreditController.findCredits);
routes.post('/find/months', CreditController.findDistinctMounts);

export { routes };
