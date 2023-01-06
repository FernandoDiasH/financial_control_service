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

    async findByID(creditConifgID: string): Promise<CreditConfig> {
        const data = await prisma.creditConfig.findUniqueOrThrow({
            where:{
                id:creditConifgID
            }
        })

        return PrismaCreditconfigMapper.toDomain(data)
    }

    async findAllByUserID(user_id: string): Promise<CreditConfig[]> {
        const data = await prisma.creditConfig.findMany({
            where:{
                user_id:user_id
            }
        })

        return data.map(creditConfig => PrismaCreditconfigMapper.toDomain(creditConfig))
    }
}