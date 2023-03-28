import { Credit } from "@app/entities/Credit";
import { CreditAbstractRepository } from "@app/repositories/CreditAbstractRepository";
import { PrismaCreditMapper } from "../mappers/prismaCreditMapper";
import { Repository } from "./repository";

export class PrismaCreditRepository extends Repository implements CreditAbstractRepository {

    async countValueCredits(user_id: string, credit_config_id: string): Promise<number> {

        const value = await this.prisma.credit.aggregate({
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

    async findCreditsByUserIdAndMonth(user_id: string, start_dt: Date, end_dt: Date): Promise<Credit[]> {
        const raw = await this.prisma.credit.findMany({
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
        const raw = await this.prisma.credit.findMany({
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

    async create(entitie: Credit): Promise<Credit> {
        const raw = PrismaCreditMapper.toPrisma(entitie);

        await this.prisma.credit.create({
            data: raw,
        });

        return entitie
    }

    async save(entitie: Credit): Promise<Credit> {
        const raw = PrismaCreditMapper.toPrisma(entitie);
        await this.prisma.credit.update({
            where: {
                id: entitie.id,
            },
            data: raw,
        });

        return entitie
    }

    async delete(userID: string, entititeId: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    async findById(entitieId: string): Promise<Credit> {
        const raw = await this.prisma.credit.findUniqueOrThrow({
            where: {
                id: entitieId
            },
        });

        return PrismaCreditMapper.toDomain(raw);
    }

    async findManyByUserId(userId: string): Promise<[] | Credit[]> {
        throw new Error("Method not implemented.");
    }

}
