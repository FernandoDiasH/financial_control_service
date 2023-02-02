import { Debit } from '../../src/app/entities/Debit';
import { IDebitRepository } from '../../src/app/repositories/IDebitRepository';

export class InMemoryDebitRepository implements IDebitRepository {
    public debits: Debit[] = [];

    async create(data: Debit): Promise<void> {
        this.debits.push(data);
    }
}
