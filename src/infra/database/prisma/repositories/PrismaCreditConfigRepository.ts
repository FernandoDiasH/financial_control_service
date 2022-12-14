import { CreditConfig } from "../../../../app/entities/CreditConfig";
import { ICreditConfiRepository } from "../../../../app/repositories/ICreditConfigRepository";
import { prisma } from "../prisma";


export class PrismaCreditConfigRepository implements ICreditConfiRepository{
    async create(creditConfig: CreditConfig): Promise<void> {
        await prisma.creditConfig.create({
            data:{
                id:creditConfig.id,
                user_id:creditConfig.user_id,
                limit_credit:creditConfig.limit_credit,
                description:creditConfig.description,
                day_due:creditConfig.credit_closing,
                credit_closing:creditConfig.credit_closing
            }
        })
    }
}