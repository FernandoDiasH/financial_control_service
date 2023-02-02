import { PrismaDebitRepository } from '../../../infra/database/prisma/repositories/PrismaDebitRepository';
import { CreateDebit } from './CreateDebit';

const debitRepository = new PrismaDebitRepository();
const createDebit = new CreateDebit(debitRepository);

export { createDebit };
