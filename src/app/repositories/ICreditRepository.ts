import { Credit } from "../entities/Credit";


export interface ICreditRepository{
    save(credit:Credit):Promise<void>
    countValueCredits(user_id:string, credit_config_id:string):Promise<number>
    findCreditsByUserIdAndMonth(user_id:string, start_dt:Date, end_dt:Date):Promise<Credit[]>
    findDistinctMounts(user_id:string):Promise<Date[]>
}