import { Credit } from "../../../../app/entities/Credit";
import { ICreditRepository } from "../../../../app/repositories/ICreditRepository";
import { prisma } from "../prisma";

export class PrismaCreditRepository implements ICreditRepository
{
    async save(credit: Credit): Promise<void> {
        prisma.credit.create({
            data:{
                id: credit.id,
                user_id: credit.user_id,
                category_id:credit.category_id,
                description:credit.description,
                credit_status:credit.credit_status,
                dt_due:credit.dt_due,
                installment_value:credit.installment_value
            }
        })
    }
}