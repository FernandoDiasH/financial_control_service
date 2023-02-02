import { Debit } from '../../../../app/entities/Debit';
import { IDebitRepository } from '../../../../app/repositories/IDebitRepository';
import { PrismaDebitMapper } from '../mappers/prisma-debit-mapper';
import { prisma } from '../prisma';

export class PrismaDebitRepository implements IDebitRepository {
    async create(debit: Debit): Promise<void> {
        const raw = PrismaDebitMapper.toPrisma(debit);

        await prisma.debit.create({
            data: raw,
        });
    }
}
