import { Credit } from "../../src/app/entities/Credit"
import { ICreditRepository } from "../../src/app/repositories/ICreditRepository"

export class InMemoryCreditRepository implements ICreditRepository
{
    public credits:Credit[] = []

    async save(data: Credit): Promise<void> {
        this.credits.push(data) 
    }
    
}