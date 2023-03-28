import { Debit } from '../../src/app/entities/Debit';
import { IDebitRepository } from '../../src/app/repositories/IDebitRepository';

export class InMemoryDebitRepository implements IDebitRepository {
    
    public debits: Debit[] = [];

    async create(data: Debit): Promise<void> {
        this.debits.push(data);
    }

    async getAll(user_id: string, start_dt: Date | null, end_dt: Date | null): Promise<Debit[]> {
        return this.debits.filter(debit => debit.user_id == user_id)
    }
}
