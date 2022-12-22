import { randomUUID } from "crypto";
import { CreditConfig } from "../../src/app/entities/CreditConfig";

type Override = Partial<CreditConfig>

export function makeCreditConfig( override:Override = {} ){
    return new CreditConfig({
            user_id:'usuario-teste',
            day_due:18,
            day_credit_closing:11,
            description:"configuracao de cartao de credito",
            limit_credit:1600,
    }, 'teste')
}