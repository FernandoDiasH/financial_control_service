import { PrismaCreditConfigRepository } from '../../../infra/database/prisma/repositories/PrismaCreditConfigRepository';
import { CreateCreditConfig } from './CreateCreditConfig';

const creditConfigReposytpory = new PrismaCreditConfigRepository();
const createCreditConfig = new CreateCreditConfig(creditConfigReposytpory);

export { createCreditConfig };
