import { Credit } from '../../../../app/entities/Credit';
import { ICreditRepository } from '../../../../app/repositories/ICreditRepository';
import { PrismaCreditMapper } from '../mappers/prisma-credit-mapper';
import { prisma } from '../prisma';

export class PrismaCreditRepository implements ICreditRepository {
    async save(credit: Credit): Promise<void> {
        const raw = PrismaCreditMapper.toPrisma(credit);

        await prisma.credit.create({
            data: raw,
        });
    }

    async countValueCredits(
        user_id: string,
        credit_config_id: string
    ): Promise<number> {
        const value = await prisma.credit.aggregate({
            _sum: {
                installment_value: true,
            },
            where: {
                credit_config_id: credit_config_id,
                user_id: user_id,
                credit_status: null,
            },
        });

        if (value._sum.installment_value == null) {
            return 0;
        }

        return value._sum.installment_value;
    }

    async findCreditsByUserIdAndMonth(
        user_id: string,
        start_dt: Date,
        end_dt: Date
    ): Promise<Credit[]> {
        const raw = await prisma.credit.findMany({
            where: {
                user_id: user_id,
                dt_due: {
                    gt: start_dt,
                    lt: end_dt,
                },
            },
            orderBy: {
                dt_due: 'asc',
            },
        });

        return raw.map((credit) => PrismaCreditMapper.toDomain(credit));
    }

    async findDistinctMounts(user_id: string): Promise<Date[]> {
        const raw = await prisma.credit.findMany({
            where: {
                user_id: user_id,
            },
            select: {
                dt_due: true,
            },
            distinct: ['dt_due'],
            orderBy: {
                dt_due: 'asc',
            },
        });

        return raw.map((date) => date.dt_due);
    }

    async update(credit: Credit): Promise<void> {
        const raw = PrismaCreditMapper.toPrisma(credit);
        await prisma.credit.update({
            where: {
                id: credit.id,
            },
            data: raw,
        });
    }

    async findByCreditID(credit_id: string): Promise<Credit> {
        const raw = await prisma.credit.findUniqueOrThrow({
            where: {
                id: credit_id,
            },
        });
        return PrismaCreditMapper.toDomain(raw);
    }
}
