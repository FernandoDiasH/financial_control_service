import { Debit } from "../entities/Debit";
import { AbstractRepository } from "./abstractRepositrory";

export abstract class DebitAbstractRepository extends AbstractRepository<Debit>{
    abstract getAll(user_id:string, start_dt?:Date | null, end_dt?: Date | null):Promise<Debit[]>
}