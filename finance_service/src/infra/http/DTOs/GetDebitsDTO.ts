

export interface GetDebitsDTO {
    user_id: string;
    start_dt?: Date | null;
    end_dt?: Date | null;
}

export class GetDebitsDTO {

    user_id: string;
    start_dt?: Date | null;
    end_dt?: Date | null;


}

export class CreteDebitDTO {

    category_id: string
    description: string
    dt_purchase: string
    user_id: string
    value: number

}