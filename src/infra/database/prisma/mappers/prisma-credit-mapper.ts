import { Credit } from "../../../../app/entities/Credit";
import {Credit as prismaCredit, CreditConfig as prismaCreditConfig, Category as prismaCategory} from '@prisma/client'
import { Category } from "../../../../app/entities/Category";
import { CreditConfig } from "../../../../app/entities/CreditConfig";



type prismaCreditDomain = (prismaCredit & {
    category: prismaCategory;
    credit_Config: prismaCreditConfig;
})
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

    static toDomain(credit:prismaCreditDomain){
        return new Credit({
            user_id:credit.user_id,
            category_id:credit.category_id,
            credit_config_id:credit.credit_config_id,
            description:credit.description,
            dt_due:credit.dt_due,
            installment_value:credit.installment_value,
            credit_status:credit.credit_status,
            category:new Category({
                user_id:credit.category.user_id,
                description:credit.category.description
            }, credit.category.id),
            creditConfig: new CreditConfig({
                user_id:credit.credit_Config.user_id,
                day_credit_closing:credit.credit_Config.day_credit_closing,
                day_due:credit.credit_Config.day_due,
                description:credit.credit_Config.description,
                limit_credit:credit.credit_Config.limit_credit
            }, credit.credit_Config.id)
        }, credit.id)
    }
}