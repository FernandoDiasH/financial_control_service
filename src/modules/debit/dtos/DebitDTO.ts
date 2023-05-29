export interface DebitDTO {
    user_id: string;
    description: string;
    value: number;
    category_id: string;
    dt_purchase: string;
    debit_type: string;
}

export interface GetDebitsPropsDTO {
    user_id: string;
    start_dt?: Date | null;
    end_dt?: Date | null;
}

export class GetDebitsDTO {
    user_id: string;
    start_dt?: string | null;
    end_dt?: string | null;
}

export class CreteDebitDTO {
    id_category: number
    description: string
    dt_purchase: string
    user_id: string
    value: number
}