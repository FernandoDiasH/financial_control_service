import { PrismaDebitRepository } from '../../../infra/database/prisma/repositories/PrismaDebitRepository';
import { CreateDebit } from './CreateDebit';
import { GetDebits } from './GetDebits';

const debitRepository = new PrismaDebitRepository();
const createDebit = new CreateDebit(debitRepository);
const getDebits = new GetDebits(debitRepository)

export { createDebit, getDebits};
