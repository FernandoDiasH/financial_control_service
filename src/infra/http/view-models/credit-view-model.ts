import { Credit } from "../../../app/entities/Credit";

export class CreditViewModel{
    static toHTTP(credit:Credit){
        return {
            id:credit.id,
            description:credit.description,
            installment_value:credit.installment_value,
            credit_status: credit.credit_status,
            vencimento:credit.dt_due,
            category:credit.category?._descripiton,
            conta: credit.creditConfig?.description
        }
    }
}