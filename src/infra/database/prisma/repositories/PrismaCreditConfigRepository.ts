import { CreditConfig } from "../../../../app/entities/CreditConfig";
import { ICreditConfiRepository } from "../../../../app/repositories/ICreditConfigRepository";
import { PrismaCreditconfigMapper } from "../mappers/prisma-credit-config-mapper";
import { prisma } from "../prisma";



export class PrismaCreditConfigRepository implements ICreditConfiRepository{


    async create(creditConfig: CreditConfig): Promise<void> {
        const raw = PrismaCreditconfigMapper.toPrisma(creditConfig)

        await prisma.creditConfig.create({
            data: raw
        })
    }

    async findByID(creditConifgID: string): Promise<CreditConfig | null> {
        const data = prisma.creditConfig.findUnique({
            where:{
                id:creditConifgID
            }
        })

        return PrismaCreditconfigMapper.toDomain(data)
    }
}