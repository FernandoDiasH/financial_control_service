export interface CreditConfigDTO {
    user_id: string;
    day_credit_closing: number;
    day_due: number;
    description: string;
    limit_credit: number;
}

export class CreateCreditConfigDTO {

    user_id: string
    description: string
    day_credit_closing: number
    day_due: number
    limit_credit: number
}
