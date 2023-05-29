export interface CreateCreditPropsDTO {
    user_id: string;
    credit_config_id: string;
    category_id: string;
    description: string;
    data_compra: string;
    parcelas: number;
    value: number;
}


export class CreateCreditDTO {
    user_id: string;
    credit_config_id: number;
    category_id: number;
    description: string;
    purchaseDate: string;
    creditInstallments: number;
    totalValue: number;
}

export class FindCreditsDTO {
    user_id: string;
    start_dt?: string;
    end_dt?: string;
}

export interface FindCreditsPropsDTO {
    user_id: string;
    start_dt?: Date;
    end_dt?: Date;
}

export class PayCreditDto{
    credit_id:number
    user_id: string;
}
