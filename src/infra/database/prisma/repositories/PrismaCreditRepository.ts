import { Credit } from "../../../../app/entities/Credit";
import { ICreditRepository } from "../../../../app/repositories/ICreditRepository";
import { PrismaCreditMapper } from "../mappers/prisma-credit-mapper";
import { prisma } from "../prisma";

export class PrismaCreditRepository implements ICreditRepository
{
    async save(credit: Credit): Promise<void> {
        const raw = PrismaCreditMapper.toPrisma(credit)
        
        prisma.credit.create({
            data:raw
        })
    }
}