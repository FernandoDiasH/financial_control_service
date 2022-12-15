import { CreditConfig } from "../../../app/entities/CreditConfig";

export class CreditConfigViewModel{
    static toHTTP(creditConfig:CreditConfig){
        return {
                id:                 creditConfig.id ,
                user_id:            creditConfig.user_id ,
                limit_credit:       creditConfig.limit_credit ,
                description:        creditConfig.description,
                day_credit_closing: creditConfig.day_credit_closing,
                day_due:            creditConfig.day_due 
        }
    }
}