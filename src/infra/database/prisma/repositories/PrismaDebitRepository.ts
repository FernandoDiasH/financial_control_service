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

    async getAll(user_id: string, start_dt: Date | null, end_dt: Date | null): Promise<Debit[]> {
        
        const raw = await prisma.debit.findMany({
            where:{
                user_id: user_id,
            }
        })
        console.log(raw);
        return  raw.map(debit => PrismaDebitMapper.toDomain(debit))
    }
}
