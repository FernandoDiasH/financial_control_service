import { Credit } from "../entities/Credit";
import { AbstractRepository } from "./abstractRepositrory";


export abstract class CreditAbstractRepository extends AbstractRepository<Credit>{

    abstract countValueCredits(
        user_id: string,
        credit_config_id: number
    ): Promise<number>;

    abstract findCreditsByUserIdAndMonth(
        user_id: string,
        start_dt: Date,
        end_dt: Date
    ): Promise<Credit[]>;

    abstract findDistinctMounts(user_id: string): Promise<Date[]>;

}