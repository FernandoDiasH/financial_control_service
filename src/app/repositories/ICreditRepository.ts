import { Credit } from "../entities/Credit";


export interface ICreditRepository{
    save(credit:Credit):Promise<void>
}