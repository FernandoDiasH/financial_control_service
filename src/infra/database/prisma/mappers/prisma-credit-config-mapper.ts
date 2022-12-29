import { CreditConfig } from "../../../../app/entities/CreditConfig";
import {CreditConfig as prismaCreditConfig} from "@prisma/client"
import {} from "@prisma/client"

export class PrismaCreditconfigMapper{
    
    static toPrisma(creditConfig:CreditConfig){
        return {
            id:creditConfig.id,
            user_id:creditConfig.user_id,
            limit_credit:creditConfig.limit_credit,
            description:creditConfig.description,
            day_due:creditConfig.day_due,
            day_credit_closing: creditConfig.day_credit_closing
        }
    }

    static toDomain(creditConfig:prismaCreditConfig):CreditConfig{
        return new CreditConfig({
            user_id:creditConfig.user_id,
            limit_credit:creditConfig.limit_credit,
            day_credit_closing:creditConfig.day_credit_closing,
            day_due:creditConfig.day_due,
            description:creditConfig.description
        }, creditConfig.id)
    }
}