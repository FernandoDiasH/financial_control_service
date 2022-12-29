import { Credit } from "../entities/Credit";


export interface ICreditRepository{
    save(credit:Credit):Promise<void>
    countValueCredits(user_id:string, credit_config_id:string):Promise<number| null>
}