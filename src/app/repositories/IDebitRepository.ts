import { Debit } from '../entities/Debit';

export interface IDebitRepository {
    create(debit: Debit): Promise<void>;
}
