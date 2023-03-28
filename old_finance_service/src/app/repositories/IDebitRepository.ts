import { Debit } from '../entities/Debit';

export interface IDebitRepository {
    create(debit: Debit): Promise<void>;
    getAll(user_id:string, start_dt?:Date | null, end_dt?: Date | null):Promise<Debit[]>
}
