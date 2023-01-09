import { Credit } from "../../../../app/entities/Credit";
import {Credit as prismaCredit} from '@prisma/client'




export class PrismaCreditMapper{
    
    static toPrisma(credit:Credit){
        return {
            id: credit.id,
            user_id: credit.user_id,
            category_id:credit.category_id,
            description:credit.description,
            credit_status:credit.credit_status,
            dt_due:credit.dt_due,
            installment_value:credit.installment_value,
            credit_config_id:credit.credit_config_id
        }
    }

    static toDomain(credit:prismaCredit){
        return new Credit({
            user_id:credit.user_id,
            category_id:credit.category_id,
            credit_config_id:credit.credit_config_id,
            description:credit.description,
            dt_due:credit.dt_due,
            installment_value:credit.installment_value,
            credit_status:credit.credit_status,
        }, credit.id)
    }
}