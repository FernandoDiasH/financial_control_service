import { Debit } from "@app/entities/Debit";
import { DebitAbstractRepository } from "@app/repositories/debitAbstractRepository";

export class InMemoryDebitRepository implements DebitAbstractRepository {
    public debits: Debit[] = [];
    
    async getAll(user_id: string, start_dt?: Date, end_dt?: Date): Promise<Debit[]> {
        return this.debits.filter(debit => debit.user_id == user_id)
    }

    async create(entitie: Debit): Promise<Debit> {
        this.debits.push(entitie);
        return entitie
    }

    async save(entitie: Debit): Promise<Debit> {
        throw new Error("Method not implemented.");
    }

    async delete(userID: string, entititeId: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    async findById(entititeId: string): Promise<Debit> {
        throw new Error("Method not implemented.");
    }

    async findManyByUserId(userId: string): Promise<[] | Debit[]> {
        throw new Error("Method not implemented.");
    }
    
}
